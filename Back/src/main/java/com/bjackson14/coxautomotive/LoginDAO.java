package com.bjackson14.coxautomotive;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Repository;
import org.springframework.web.server.ResponseStatusException;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

@Repository
@Transactional
public class LoginDAO {

    @PersistenceContext
    private EntityManager em;

    public Login getLoginByUsername(String username) throws ResponseStatusException {
        Login login = em.find(Login.class, username);
        if (login == null)
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Username Provided Does Not Exits");
        return em.find(Login.class, username);
    }
}
