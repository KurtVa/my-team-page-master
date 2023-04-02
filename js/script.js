window.onload = function() {
    // Get a reference to the image container div
    var galleryContainer = document.getElementById("gallery");

    // Define the path to the images folder
    var imagesPath = "images/";

    // Define an array to store the image file names
    var imageFileNames = ["photo1.png", "photo2.png", "photo3.png","photo4.png", "photo5.png", "photo6.png"];
    
    // Define an array to store the profile Names
    var imagePersonNames = ["Bill Mahony", "Sarah Cabrera", "Shae Lee","Skylah Lu", "Griff Richards", "Stan John"];
    
    // Define an array to store the profile Roles
    var imagePersonRoles = ["Product Owner", "Art director", "Tech Lead","UX Designer", "Developer", "Developer"];


    var profileRow =  document.createElement("div");
    profileRow.classList.add("row"); 
    profileRow.classList.add("justify-content-between");   
    profileRow.id="profileRow";
    // Loop through the image file names and create an image element for each one
    for (var i = 0; i < imageFileNames.length; i++) {
        // Create a new profilecontainer
        var profilecontainer = document.createElement("div");
        profilecontainer.classList.add("profilecontainer");
        profilecontainer.classList.add("col-md-4")
        profilecontainer.classList.add("col-sm-5")
        profilecontainer.classList.add("col-xs-5")
        if(i==1 || i ==4){
            profilecontainer.classList.add("profile-margin");
        }
        if(i%2==0){
            profilecontainer.classList.add("odd");
        }else{
            profilecontainer.classList.add("even");
        }

       
        var profileElemRow =  document.createElement("div");
        profileElemRow.classList.add("row");
        profileElemRow.classList.add("elemRow");

        // Create a new profileName
        var profileName = document.createElement("div");
        profileName.classList.add("profileName");
        profileName.textContent=imagePersonNames[i];
        profileName.classList.add("col-12")

        // Create a new profileRole
        var profileRole = document.createElement("figcaption");
        profileRole.classList.add("profileRole");
        profileRole.textContent=imagePersonRoles[i];
        profileRole.classList.add("col-md-4")
       

    

        // Create a new image element
        var image = document.createElement("img");
        image.classList.add("img-fluid");
        

       

        // Set the source attribute to the image file path
        image.src = imagesPath + imageFileNames[i];
        
        var imageContainer = document.createElement("div");
        imageContainer.classList.add("col-md-8")
        imageContainer.classList.add("imagecontainer")
        imageContainer.appendChild(image);
        imageContainer.appendChild(profileRole)

        // Append the elements to the container div
        profileElemRow.appendChild(imageContainer);
        //profileElemRow.appendChild(profileRole);

        profilecontainer.appendChild(profileElemRow);
        profilecontainer.appendChild(profileName);

        profileRow.appendChild(profilecontainer)

       
    }
     // Append the image element to the container div
     galleryContainer.appendChild(profileRow);
}