package com.example.miguel.computers.Repository.CrudRepository;

import com.example.miguel.computers.Model.Message;
import org.springframework.data.repository.CrudRepository;

public interface MessageCrudRepository extends CrudRepository<Message, Integer> {
}
