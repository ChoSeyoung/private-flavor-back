package com.domain.flavor.api.controller;

import com.domain.flavor.api.entity.response.ExampleDTO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api")
@RestController
public class ApiController {

    @ResponseBody
    @GetMapping("/example")
    public ExampleDTO index() {
        ExampleDTO exampleDTO = new ExampleDTO();

        exampleDTO.setId("example id");
        exampleDTO.setPw("example pw");

        return exampleDTO;
    }
}
