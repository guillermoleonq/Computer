const ApiUrl = "https://g69606de85beb68-ciclo3reto1.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message";

class Mensaje {

    static insert() {
        const mensaje ={
            id: $("#id").val(),
            brand: $("#messagetext").val(),

        };
        $.ajax ({
            type: "POST",
            url: ApiUrl,
            dataType: "json",
            crossDomain: true,
            data: JSON.stringify(mensaje),
            contentType: "application/json",
            complete: function(respuesta) {
       
                if (respuesta.status == 201) {  
                    Mensajes.loadAll();
                    $("#id").val(""),
                    $("#messagetext").val(""),
                    alert("Mensaje fue agregado");
                } else {
                    alert("No se agrego registro");
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
                                    ${data.items[i].messagetext}
                                </a>
                            </td>
 
                            <td>
                                <button onclick="Cliente.deleteById(${data.items[i].id})">Borrar</button>
                            </td>
                        </tr>`);
                    }
                },
                error: function () {  
                    alert("No se agrego mensaje");
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
                    alert("Mensaje no existe")
                }else {
                    $computers("#details").html(`
                    <p><b>Id:</b> ${data.items[0].id}</p>
                    <p><b>Marca:</b> ${data.items[0].messagetext}</p>

                    `)
                }
            },
            error: function () {  
            
            }
            });
    }

    static update() {
        const mensaje ={
            id: $("#id").val(),
            brand: $("#messagetext").val(),

        };
        $.ajax ({
            type: "PUT",
            url: ApiUrl,
            dataType: "json",
            crossDomain: true,
            data: JSON.stringify(mensaje),
            contentType: "application/json",
            complete: function(respuesta) {
                if (respuesta.status == 201) {
                    Mensajes.loadAll();
                    $("#id").val(""),
                    $("#messagetext").val(""),

                    alert("Mensaje fue actualizado");
                } else {
                    alert("Houston No se actualizo computado");
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
                    Computers.loadAll();
                    alert("Mensaje fue borrado");  
                } else {
                    alert("No se borro el registro");
                }
            }
        });
    }
}