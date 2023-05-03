$(()=>{
    
    $( "#btnCreateAcount " ).on( "click", function() {
        let formulario = $("#formulario").serializeArray();
        console.log(formulario) 
        window.localStorage.setItem("reserva",JSON.stringify(formulario))
        alert("Reserva guarda con exito :)")
      } );

      let reserva = JSON.parse(window.localStorage.getItem("reserva")) 
      $("#reservaPrimerNombre").text(reserva[0].value)
      $("#reservaCorreo").text(reserva[5].value)
      $("#reservaTelefono").text(reserva[6].value)
      $("#reservaPostal").text(reserva[3].value)
      $("#reservaCiudad").text(reserva[4].value)
      $("#reservaDireccion").text(reserva[7].value)
      $("#reservaEmpresa").text(reserva[2].value)
      $("#reservaCiudad").text(reserva[6].value)



});



$( "body" ).on( "click","#guardarReserva", function() {
  let formulario ={
    'fecha1': $("#fecha1").val(),
    'fechaFin': $("#fechaFin").val(),
    
  };
  window.localStorage.setItem("reservaInfo",JSON.stringify(formulario))
      location.href="reservation-1.html"
  
  alert (JSON.stringify(formulario))
  // window.localStorage.setItem("reserva",JSON.stringify(formulario))
  // alert("Reserva guarda con exito :)")
} );

$ (document).ready(function(){
  let reservaInfo = JSON.parse(window.localStorage.getItem("reservaInfo")) 
console.log(reservaInfo)


$("#Fecha1").html(reservaInfo.fecha1)
$("#fechaFin").html(reservaInfo.fechaFin)
$("#huesped1").html(reservaInfo.huesped1)
})
