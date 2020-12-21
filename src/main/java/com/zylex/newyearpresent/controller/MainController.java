package com.zylex.newyearpresent.controller;

import org.springframework.stereotype.Controller;

@Controller
public class MainController {

    public String getIndexPage() {
        return "index";
    }
}
