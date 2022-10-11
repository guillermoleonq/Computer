package com.example.miguel.computers.Repository;

import com.example.miguel.computers.Model.Category;
import com.example.miguel.computers.Repository.CrudRepository.CategoryCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

//**
/* @author guille
 */
@Repository
public class CategoryRepository {
    @Autowired
    private CategoryCrudRepository categoryCrudRepository;

    public List<Category> getAll() {
        return (List<Category>) categoryCrudRepository.findAll();
    }
    public Optional<Category> getCategory(int id){
        return categoryCrudRepository.findById(id);
    }

    // Sirve para actualizar (save/update) tambien
        public Category save(Category ct){
        return categoryCrudRepository.save(ct);
    }

    public void delete(Category ct){
        categoryCrudRepository.delete(ct);
    }
}
