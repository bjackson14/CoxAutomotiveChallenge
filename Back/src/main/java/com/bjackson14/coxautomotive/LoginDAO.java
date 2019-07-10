package com.bjackson14.coxautomotive;

import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

@Repository
@Transactional
public class LoginDAO {

    @PersistenceContext
    private EntityManager em;

    public Login getLoginByUsername(String username) {
        return em.find(Login.class, username);
    }
}
