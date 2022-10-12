package com.example.miguel.computers.Model;

//**
/* @author guille
 */

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;


@Entity
@Table(name="messages")
public class Message implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idMessage;
    private String messageText;

    @ManyToOne
    @JoinColumn(name = "computerId")
    @JsonIgnoreProperties({"messages","reservations"})
    private Computer computer;

    @ManyToOne
    @JoinColumn(name = "clientId")
    @JsonIgnoreProperties({"messages","reservations"})
    private Client client;

    public Integer getIdMessage() {
        return idMessage;
    }

    public void setIdMessage(Integer idMessage) {
        this.idMessage = idMessage;
    }

    public String getMessageText() {
        return messageText;
    }

    public void setMessageText(String messageText) {
        this.messageText = messageText;
    }

    public Computer getComputer() {
        return computer;
    }

    public void setComputer(Computer computer) {
        this.computer = computer;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }
}
