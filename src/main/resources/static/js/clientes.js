const ApiUrl = "https://g69606de85beb68-ciclo3reto1.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client";

class Cliente {

    static insert() {
        const cliente ={
            id: $("#id").val(),
            name: $("#name").val(),
            email: $("#email").val(),
            age: $("#age").val(),
        };
        $.ajax ({
            type: "POST",
            url: ApiUrl,
            dataType: "json",
            crossDomain: true,
            data: JSON.stringify(cliente),
            contentType: "application/json",
            complete: function(respuesta) {
       
                if (respuesta.status == 201) {  
                    Cliente.loadAll();
                    $("#id").val(""),
                    $("#name").val(""),
                    $("#email").val(""),
                    $("#age").val(""),
                    alert("Cliente fue agregado");
                } else {
                    alert("No se agrego cliente");
                }
            }
        });
    }

    
    static loadAll() {
        $.ajax ({
            url: ApiUrl,
            type: "GET",
            dataType: "json",
            crossDomain: true,
            contentType: "application/json",
            success: function(data) {
                    $("tbody").html("");
                    for (let i=0; i < data.items.length; ++i) {
                        $("tbody").append(`<tr>
                            <td>${data.items[i].id}</td>
                            <td>
                                <a href="#" <button onclick="Cliente.loadById(${data.items[i].id})">
                                    ${data.items[i].name}
                                </a>
                            </td>
                            <td>${data.items[i].email}</td>
                            <td>${data.items[i].age}</td>
 
                            <td>
                                <button onclick="Cliente.deleteById(${data.items[i].id})">Borrar</button>
                            </td>
                        </tr>`);
                    }
                },
                error: function () {  
                    alert("No se agrego cliente");
                }
            });
        }
    


    static loadById(id) {
        $.ajax ({
            url: ApiUrl + "/" + id,
            type: "GET",
            dataType: "json",
            crossDomain: true,
            contentType: "application/json",
            success: function(data) {
                if (data.items.length == 0){
                    alert("Cliente no existe")
                }else {
                    $("#details").html(`
                    <p><b>Id:</b> ${data.items[0].id}</p>
                    <p><b>Nombre:</b> ${data.items[0].name}</p>
                    <p><b>Correo:</b> ${data.items[0].email}</p>
                    <p><b>Edad:</b> ${data.items[0].age}</p>
                    `)
                }
            },
            error: function () {  
            
            }
            });
    }

    static update() {
        const cliente ={
            id: $("#id").val(),
            name: $("#name").val(),
            email: $("#email").val(),
            age: $("#age").val(),
        };
        $.ajax ({
            type: "PUT",
            url: ApiUrl,
            dataType: "json",
            crossDomain: true,
            data: JSON.stringify(cliente),
            contentType: "application/json",
            complete: function(respuesta) {
                if (respuesta.status == 201) {
                    Cliente.loadAll();
                    $("#id").val(""),
                    $("#name").val(""),
                    $("#email").val(""),
                    $("#age").val(""),
                    alert("Cliente fue actualizado");
                } else {
                    alert("Houston No se actualizo cliente");
                }
            }
        });
    }

    static deleteById(id) {
        $.ajax ({
            url: ApiUrl,
            type: "DELETE",
            dataType: "json",
            crossDomain: true,
            data: JSON.stringify({id}),
            contentType: "application/json",
            complete: function(respuesta, data) {
                if (respuesta.status == 204) {
                    Cliente.loadAll();
                    alert("Cliente fue borrado");  
                } else {
                    alert("No se borro el cliente");
                }
            }
        });
    }
}