package com.zylex.newyearpresent.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/")
    public String getIndexPage() {
        return "index";
    }

    @GetMapping("/present")
    public String getPresentPage() {
        return "present";
    }
}
