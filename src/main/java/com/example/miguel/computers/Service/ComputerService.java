package com.example.miguel.computers.Service;


import com.example.miguel.computers.Model.Computer;
import com.example.miguel.computers.Repository.ComputerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ComputerService {
    @Autowired
    private ComputerRepository computerRepository;

    public List<Computer> getAll(){
        return computerRepository.getAll();
    }
    public Optional<Computer> getComputer(int id){
        return computerRepository.getComputer(id);
    }

    public Computer save(Computer computer) {
        if (computer.getId() == null) {
            return computerRepository.save(computer);
        } else {
            Optional<Computer> computerEncontrado = computerRepository.getComputer(computer.getId());
            if (computerEncontrado.isPresent()) {
                return computer;
            } else {
                return computerRepository.save(computer);
            }
        }
    }

    public Computer update (Computer computer){
        if(computer.getId() != null){
            Optional<Computer> computerEncontrado = computerRepository.getComputer(computer.getId());
            if(computerEncontrado.isPresent()) {
                if (computer.getName() != null) {
                    computerEncontrado.get().setName(computer.getName());
                }
                if (computer.getBrand() != null) {
                    computerEncontrado.get().setBrand(computer.getBrand());
                }
                if (computer.getYear() != null) {
                    computerEncontrado.get().setYear(computer.getYear());
                }
                if (computer.getDescription() != null) {
                    computerEncontrado.get().setDescription(computer.getDescription());
                }
                if (computer.getCategory() != null) {
                    computerEncontrado.get().setCategory(computer.getCategory());
                }
                computerRepository.save(computerEncontrado.get());
                return computerEncontrado.get();
            }else {
                return computer;
            }
        }else{
            return computer;
        }
    }
    public boolean delete(int id){
        Boolean respuesta = getComputer(id).map(elemento ->{
            computerRepository.delete(elemento);
            return true;
        }).orElse(false);
        return respuesta;
    }
}
