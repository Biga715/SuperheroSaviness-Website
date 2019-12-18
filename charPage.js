
    var apiKey=2295247247247029;
    document.getElementById("charSearch").addEventListener("submit", getCharId);







    function getCharId(event){
      event.preventDefault();
      var xhttp = new XMLHttpRequest();
      var name = document.getElementById("heroName").value

      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

          var response= JSON.parse(this.responseText);

          var url = response.results[0].image["url"];
          var powerStats = response.results[0].powerstats;
          var biography = response.results[0].biography;
          var work = response.results[0].work;
          var appearance = response.results[0].appearance;
          var nname = response.results[0].name;
          console.log(powerStats);
          
          document.getElementById("heroName").value = "";
          addHeroImage(nname, url, powerStats, biography, work, appearance);

        }
        else{

        }
    };

    console.log("hi" + name);
    xhttp.open("GET", "https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/" + apiKey + "/search/" +name, true);
    xhttp.setRequestHeader("x-api-key",apiKey);
    xhttp.send();
    }


    function addHeroImage(name, url, powerStats, biography, work, appearance){
      console.log(powerStats);
      var divElement = document.createElement("div");
      divElement.setAttribute("class", "heroInfo");

      var imageElement = document.createElement("img");
      imageElement.setAttribute("src", url);
      imageElement.setAttribute("class", "imageInfo")


      //biography
      var bioTitle = document.createElement("p");
      var bioText = document.createTextNode("Biography");
      bioTitle.appendChild(bioText);
      bioTitle.setAttribute("class", "bioTitle");
      divElement.appendChild(bioTitle);

      //name
      var nameElement = document.createElement("p");
      var text = document.createTextNode(name);
      nameElement.appendChild(text);
      nameElement.setAttribute("class", "nameInfo");
      divElement.appendChild(nameElement);

      //full name
      var fullnameElement = document.createElement("p");
      var fNtext = document.createTextNode("Full Name: " + biography["full-name"]);
      fullnameElement.appendChild(fNtext);
      fullnameElement.setAttribute("class", "fnInfo");
      divElement.appendChild(fullnameElement);

      //birth place
      var bPElement = document.createElement("p");
      var bPtext = document.createTextNode("Birth Place: " + biography["place-of-birth"]);
      bPElement.appendChild(bPtext);
      bPElement.setAttribute("class", "bpInfo");
      divElement.appendChild(bPElement);

      //occupation
      var oElement = document.createElement("p");
      var otext = document.createTextNode("Occupation: " + work["occupation"]);
      oElement.appendChild(otext);
      oElement.setAttribute("class", "oInfo");
      divElement.appendChild(oElement);

      //powerstats
      var pSTitle = document.createElement("p");
      var pSText = document.createTextNode("Power Stats");
      pSTitle.appendChild(pSText);
      pSTitle.setAttribute("class", "pSTitle");
      divElement.appendChild(pSTitle);

      //intelligence
      var iElement = document.createElement("p");
      var itext = document.createTextNode("Intelligence: " + powerStats["intelligence"]);
      iElement.appendChild(itext);
      iElement.setAttribute("class", "iInfo");
      divElement.appendChild(iElement);

      //strength
      var sElement = document.createElement("p");
      var stext = document.createTextNode("Strength: " + powerStats["strength"]);
      sElement.appendChild(stext);
      sElement.setAttribute("class", "sInfo");
      divElement.appendChild(sElement);

      //Speed
      var sDElement = document.createElement("p");
      var sDtext = document.createTextNode("Speed: " + powerStats["speed"]);
      sDElement.appendChild(sDtext);
      sDElement.setAttribute("class", "sDInfo");
      divElement.appendChild(sDElement);

      //durability
      var durabilityElement = document.createElement("p");
      var durabilitytext = document.createTextNode("Durability: " + powerStats["durability"]);
      durabilityElement.appendChild(durabilitytext);
      durabilityElement.setAttribute("class", "durabilityInfo");
      divElement.appendChild(durabilityElement);

      //power
      var powerElement = document.createElement("p");
      var powertext = document.createTextNode("Power: " + powerStats["power"]);
      powerElement.appendChild(powertext);
      powerElement.setAttribute("class", "powerInfo");
      divElement.appendChild(powerElement);

      //combat
      var combatElement = document.createElement("p");
      var combattext = document.createTextNode("Combat: " + powerStats["combat"]);
      combatElement.appendChild(combattext);
      combatElement.setAttribute("class", "combatInfo");
      divElement.appendChild(combatElement);

      //appearance
      var aTitle = document.createElement("p");
      var aText = document.createTextNode("Appearance");
      aTitle.appendChild(aText);
      aTitle.setAttribute("class", "aTitle");
      divElement.appendChild(aTitle);

      //gender
      var genderElement = document.createElement("p");
      var genderText = document.createTextNode("Gender: " + appearance["gender"]);
      genderElement.appendChild(genderText);
      genderElement.setAttribute("class", "genderInfo");
      divElement.appendChild(genderElement);

      //race
      var raceElement = document.createElement("p");
      var raceText = document.createTextNode("Race: " + appearance["race"]);
      raceElement.appendChild(raceText);
      raceElement.setAttribute("class", "raceInfo");
      divElement.appendChild(raceElement);

      //height
      var heightElement = document.createElement("p");
      var heightText = document.createTextNode("Height: " + appearance["height"][0]);
      heightElement.appendChild(heightText);
      heightElement.setAttribute("class", "heightInfo");
      divElement.appendChild(heightElement);

      //weight
      var weightElement = document.createElement("p");
      var weightText = document.createTextNode("Weight: " + appearance["weight"][0]);
      weightElement.appendChild(weightText);
      weightElement.setAttribute("class", "weightInfo");
      divElement.appendChild(weightElement);

      //eye color
      var ecElement = document.createElement("p");
      var ecText = document.createTextNode("Eye Color: " + appearance["eye-color"]);
      ecElement.appendChild(ecText);
      ecElement.setAttribute("class", "ecInfo");
      divElement.appendChild(ecElement);

      //hair color
      var hcElement = document.createElement("p");
      var hcText = document.createTextNode("Hair Color: " + appearance["hair-color"]);
      hcElement.appendChild(hcText);
      hcElement.setAttribute("class", "hcInfo");
      divElement.appendChild(hcElement);


      divElement.appendChild(imageElement);
      document.getElementById("charContent").appendChild(divElement);

    }
