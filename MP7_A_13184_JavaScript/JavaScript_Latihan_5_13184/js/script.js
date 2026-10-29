function fn_ValForm(){
    var sMsg = "";
    var kategori = "";
    var jLomba = "";
    var email = ^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$;
    
        switch(document.getElementById("kategori").value){
            case "C":
                jLomba = "Cerdas Cermat";
                break;
            case "P":
                jLomba = "Puisi";
                break;
            case "D":
                jLomba = "Design Poster";
                break;
        }

        if (document.getElementById("nama").value == "") {
                sMsg += "\n* Anda belum mengisikan nama";
        }
        if (document.getElementById("email").value == "") {
                sMsg += "\n* Anda belum mengisikan kelas";
        }

        if (document.getElementById("umur").value == "") {
                sMsg += "\n* Anda belum mengisikan alasan";
        }else{
            if(document.getElementById("umur") <= 14){
                kategori = "Kategori Junior";
            }else{
                kategori = "Kategori Senior";
            }
        }

        if(document.getElementById("kategori").value == ""){
            sMsg += "\n* Anda belum memilih Kategori Lomba";
        }

        if(sMsg != "") {
           alert("Peringatan:\n" + sMsg);
            return false;
        } else {
            alert("Terima kasih [nama] ! Anda terdaftar di lomba [pilihan] [(info)]")
            return true;
        }

        
        
}