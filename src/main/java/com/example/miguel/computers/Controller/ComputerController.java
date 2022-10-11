package com.example.miguel.computers.Controller;


import com.example.miguel.computers.Model.Computer;
import com.example.miguel.computers.Service.ComputerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/Computer")
@CrossOrigin(origins="*",methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE})

public class ComputerController {

    @Autowired
    private ComputerService computerService;

    @GetMapping("/all")
    public List<Computer> getAll(){
        return computerService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Computer> getComputer(@PathVariable("id") int id){
        return computerService.getComputer(id);
    }

    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Computer save(@RequestBody Computer computer){
        return computerService.save(computer);
    }
}
