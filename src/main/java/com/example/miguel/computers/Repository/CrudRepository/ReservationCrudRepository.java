package com.example.miguel.computers.Repository.CrudRepository;

import com.example.miguel.computers.Model.Reservation;
import org.springframework.data.repository.CrudRepository;

public interface ReservationCrudRepository extends CrudRepository<Reservation,Integer> {
}
