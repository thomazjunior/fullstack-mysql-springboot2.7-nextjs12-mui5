package com.curso.java.cursojava.controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "Hello")
public class HelloWorld {

    @GetMapping
    public String helloWorld() {

        return "Hello World";
    }

    @PostMapping
    public String criarUtilizador() {

        return "Utilizador criado com sucesso";
    }

    @PutMapping
    String atualizarUtilizador() {

        return "Utilizador atualizado com sucesso";
    }

    @DeleteMapping
    String deletarUtilizador() {
        return "Utilizador delatado com sucesso";
    }

    //CRUD 

}
