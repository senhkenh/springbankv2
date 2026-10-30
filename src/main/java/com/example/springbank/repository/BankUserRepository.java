package com.example.springbank.repository;

import com.example.springbank.model.BankUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface BankUserRepository extends JpaRepository<BankUser, Long> {

    Optional<BankUser> findByUsername(String username);

    boolean existsByUsername(String username);

    boolean existsByEmail(String email);

    @Modifying
    @Query("UPDATE BankUser b SET b.failedAttempts = ?2 WHERE b.username = ?1")
    void updateFailedAttempts(String username, int failAttempts);
}
