package com.example.miguel.computers.Service;
//**
/* @author guille
 */

import com.example.miguel.computers.Model.Admin;
import com.example.miguel.computers.Repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminService {
    @Autowired
    private AdminRepository adminRepository;

    public List<Admin> getAll() {
        return (List<Admin>) adminRepository.getAll();
    }
    public Optional<Admin> getById(int id){
        return adminRepository.getAdmin(id);
    }
    // Sirve para actualizar (save/update) tambien
    public Admin save(Admin admin){
        if(admin.getIdAdmin() == null){
            return adminRepository.save(admin);
        } else{
            Optional<Admin> adminEncontrado = adminRepository.getAdmin(admin.getIdAdmin());
            if(adminEncontrado.isEmpty()){
                return adminRepository.save(admin);
            } else{
                return admin;
            }
        }
    }
    public Admin update(Admin admin){
        if(admin.getIdAdmin() != null){
            Optional<Admin> adminEncontrado = adminRepository.getAdmin(admin.getIdAdmin());
            if(!adminEncontrado.isEmpty()){
                if(admin.getPassword() != null){
                    adminEncontrado.get().setPassword(admin.getPassword());
                }
                if(admin.getName() != null){
                    adminEncontrado.get().setName(admin.getName());
                }
                return adminRepository.save(adminEncontrado.get());
            }
        }return admin;
    }

    public boolean deleteAdmin(int adminId){
        Boolean resultado = getById(adminId).map(adminPorEliminar ->{
        //Boolean resultado = getAdmin(Id).map(elemento ->{
            return true;
        }).orElse(false);
        return resultado;
    }
}
