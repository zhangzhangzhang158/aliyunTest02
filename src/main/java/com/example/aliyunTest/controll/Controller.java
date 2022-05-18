package com.example.aliyunTest.controll;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
public class Controller {
    @RequestMapping("/api/hello")
    public String hello() {
        //调用业务，接收前端参数
        return "hello,world";
    }
    @RequestMapping(value = "/api/onlogin", method = RequestMethod.GET)
    public Boolean onLogin(String username,String password) {
        //调用业务，接收前端参数
        String usern = username;
        String pws = password;
        return true;
    }
}