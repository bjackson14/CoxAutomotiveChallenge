package com.bjackson14.coxautomotive;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
public class LoginController {
    @Autowired
    private LoginDAO loginDAO;

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/getLogin/{username}", method = RequestMethod.GET)
    public Login getLogin(@PathVariable String username) throws ResponseStatusException {
        return loginDAO.getLoginByUsername(username);
    }
}
