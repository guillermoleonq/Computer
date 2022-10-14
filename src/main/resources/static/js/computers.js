const ApiUrl = "https://g69606de85beb68-ciclo3reto1.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/computer/computer";

class Computers {

    static insert() {
        const computer ={
            id: $("#id").val(),
            brand: $("#brand").val(),
            model: $("#model").val(),
            category_id: $("#category_id").val(),
            name: $("#name").val(),
        };
        $.ajax ({
            type: "POST",
            url: ApiUrl,
            dataType: "json",
            crossDomain: true,
            data: JSON.stringify(computer),
            contentType: "application/json",
            complete: function(respuesta) {
       
                if (respuesta.status == 201) {  
                    Computers.loadAll();
                    $("#id").val(""),
                    $("#brand").val(""),
                    $("#model").val(""),
                    $("#category_id").val(""),
                    $("#name").val(""),
                    alert("Computador fue agregado");
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
                                    ${data.items[i].brand}
                                </a>
                            </td>
                            <td>${data.items[i].model}</td>
                            <td>${data.items[i].category_id}</td>
                            <td>${data.items[i].name}</td>
 
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
                    alert("Computador no existe")
                }else {
                    $computers("#details").html(`
                    <p><b>Id:</b> ${data.items[0].id}</p>
                    <p><b>Marca:</b> ${data.items[0].brand}</p>
                    <p><b>Modelo:</b> ${data.items[0].model}</p>
                    <p><b>Categoria:</b> ${data.items[0].category_id}</p>
                    <p><b>Nombre:</b> ${data.items[0].name}</p>
                    `)
                }
            },
            error: function () {  
            
            }
            });
    }

    static update() {
        const computer ={
            id: $("#id").val(),
            brand: $("#brand").val(),
            model: $("#model").val(),
            category_id: $("#category_id").val(),
            name: $("#name").val(),
        };
        $.ajax ({
            type: "PUT",
            url: ApiUrl,
            dataType: "json",
            crossDomain: true,
            data: JSON.stringify(computer),
            contentType: "application/json",
            complete: function(respuesta) {
                if (respuesta.status == 201) {
                    Computers.loadAll();
                    $("#id").val(""),
                    $("#brand").val(""),
                    $("#model").val(""),
                    $("#category_id").val(""),
                    $("#name").val(""),
                    alert("Computador fue actualizado");
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
                    alert("Computador fue borrado");  
                } else {
                    alert("No se borro el computador");
                }
            }
        });
    }
}