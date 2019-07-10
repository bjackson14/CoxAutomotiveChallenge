package com.bjackson14.coxautomotive;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
public class LoginController {
    @Autowired
    private LoginDAO loginDAO;

    @RequestMapping(value = "/getLogin/{username}", method = RequestMethod.GET)
    public Login getLogin(@PathVariable String username) throws ResponseStatusException {
        return loginDAO.getLoginByUsername(username);
    }
}
