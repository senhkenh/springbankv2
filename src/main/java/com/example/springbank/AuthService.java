package com.example.springbank;

import com.example.springbank.model.BankUser;
import com.example.springbank.repository.BankUserRepository;
import jakarta.transaction.Transactional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class AuthService {

    private static final Logger logger = LoggerFactory.getLogger(AuthService.class);
    private static final int MAX_FAILED_ATTEMPTS = 3; //Límite bancario estándar

    private final BankUserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public AuthService(BankUserRepository userRepository) {
        this.userRepository = userRepository;
        //Se inicia Spring Security
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    @Transactional
    public boolean login(String username, String password) {
        logger.info("Intento de autenticación para el usuario: {}", username);

        Optional<BankUser> userOpt = userRepository.findByUsername(username);

        if (userOpt.isEmpty()) {
            logger.warn("El usuario {} no existe", username);
            return false;
        }
        BankUser user = userOpt.get();

        //Validar si la cuenta ya se encuentra bloqueada
        if(user.isAccountLocked()) {
            logger.warn("Intento de acceso rechazado");
            throw new RuntimeException("La cuenta se encuentra bloqueada por motivos de seguridad. Contacte al banco.");
        }

        //Verificar la contraseña con BCrypt, comparación de texto plano vs el hash guardado
        if(passwordEncoder.matches(password, user.getPassword())) {
            //Éxito: Si tenía intentos fallidos acumulados, los reiniciamos a 0
            if(user.getFailedAttempts() > 0) {
                userRepository.updateFailedAttempts(username, 0);
            }
            logger.info("Autenticación exitosa (Paso 1) para el usuario: {}", username);
            return true;
        } else {
            //Fallo: Registramos el error y se gestiona el contador de bloqueos
            processFailedAttempt(user);
            return false;
        }
    }

    private void processFailedAttempt(BankUser user) {
        int newAttempts = user.getFailedAttempts() + 1;
        logger.warn("Contraseña incorrecta para el usuario: {}. Intento fallido número: {}", user.getUsername(), newAttempts);

        if (newAttempts >= MAX_FAILED_ATTEMPTS) {
            user.setAccountLocked(true);
            user.setLockTime(LocalDateTime.now());
            logger.warn("Cuenta bloqueada para el usuario: {} por exceder intentos fallidos", user.getUsername());
        }
        
        user.setFailedAttempts(newAttempts);
        userRepository.save(user);
    }

    @Transactional
    public BankUser register(String username, String email, String password, String phoneNumber) {
        if (userRepository.existsByUsername(username)) {
            throw new RuntimeException("El nombre de usuario ya existe");
        }
        if (userRepository.existsByEmail(email)) {
            throw new RuntimeException("El email ya está registrado");
        }

        BankUser newUser = new BankUser();
        newUser.setUsername(username);
        newUser.setEmail(email);
        newUser.setPassword(passwordEncoder.encode(password));
        newUser.setPhoneNumber(phoneNumber);
        
        return userRepository.save(newUser);
    }
}