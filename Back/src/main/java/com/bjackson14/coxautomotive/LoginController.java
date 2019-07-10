package com.bjackson14.coxautomotive;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {
    @Autowired
    private LoginDAO loginDAO;

    @RequestMapping(value = "/getLogin/{username}", method = RequestMethod.GET)
    public Login getLogin(@PathVariable String username) {
        return loginDAO.getLoginByUsername(username);
    }
}
