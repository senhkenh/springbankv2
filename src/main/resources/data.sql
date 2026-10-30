-- Usuarios de prueba para SpringBank
-- Contraseñas hasheadas con BCrypt (todas son "Password123!")

-- Cliente 1: Juan Pérez
INSERT INTO bank_users (username, password, email, phone_number, enabled, account_locked, failed_attempts, role) 
VALUES ('12345678-9', '$2a$10$KfS4mYW09MteAmhrzW80cu1ZwOWW5.411/3P62vNTfE1I4ulTXBDi', 'juan.perez@email.cl', '+56912345678', true, false, 0, 'ROLE_CLIENT');

-- Cliente 2: María González
INSERT INTO bank_users (username, password, email, phone_number, enabled, account_locked, failed_attempts, role) 
VALUES ('98765432-1', '$2a$10$KfS4mYW09MteAmhrzW80cu1ZwOWW5.411/3P62vNTfE1I4ulTXBDi', 'maria.gonzalez@email.cl', '+56987654321', true, false, 0, 'ROLE_CLIENT');

-- Cajero: Carlos Rodríguez
INSERT INTO bank_users (username, password, email, phone_number, enabled, account_locked, failed_attempts, role) 
VALUES ('11223344-5', '$2a$10$KfS4mYW09MteAmhrzW80cu1ZwOWW5.411/3P62vNTfE1I4ulTXBDi', 'carlos.rodriguez@springbank.cl', '+56955556666', true, false, 0, 'ROLE_CASHIER');

-- Administrador: Ana Martínez
INSERT INTO bank_users (username, password, email, phone_number, enabled, account_locked, failed_attempts, role) 
VALUES ('55667788-9', '$2a$10$KfS4mYW09MteAmhrzW80cu1ZwOWW5.411/3P62vNTfE1I4ulTXBDi', 'ana.martinez@springbank.cl', '+56999998888', true, false, 0, 'ROLE_ADMIN');
