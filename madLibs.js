	document.getElementById("madLibsText").style.display = "none";
		
		document.getElementById("buttonOne").onclick = function (){
			var nameOneText = "";
			nameOneText = document.getElementById("nameOneInput").value;
			document.getElementById("nameOne").innerHTML = nameOneText;
			
			
			var adjectiveOneText = "";
			adjectiveOneText = document.getElementById("adjectiveOneInput").value;
			document.getElementById("adjectiveOne").innerHTML = adjectiveOneText;
			
			
			var placeOneText = "";
			placeOneText = document.getElementById("placeOneInput").value;
			document.getElementById("placeOne").innerHTML = placeOneText;
			
			
			var dayOneText = "";
			dayOneText = document.getElementById("dayOneInput").value;
			document.getElementById("dayOne").innerHTML = dayOneText;
		
		
			var timeOneText = "";
			timeOneText = document.getElementById("timeOneInput").value;
			document.getElementById("timeOne").innerHTML = timeOneText;
	
	
			var verbOneText = "";
			verbOneText = document.getElementById("verbOneInput").value;
			document.getElementById("verbOne").innerHTML = verbOneText;
			
			
			var nounOneText = "";
			nounOneText = document.getElementById("nounOneInput").value;
			document.getElementById("nounOne").innerHTML = nounOneText;
			
			
			var adjectiveTwoText = "";
			adjectiveTwoText = document.getElementById("adjectiveTwoInput").value;
			document.getElementById("adjectiveTwo").innerHTML = adjectiveTwoText;
			
			
			var nounTwoText = "";
			nounTwoText = document.getElementById("nounTwoInput").value;
			document.getElementById("nounTwo").innerHTML = nounTwoText;
			
			
			var nameTwoText = "";
			nameTwoText = document.getElementById("nameTwoInput").value;
			document.getElementById("nameTwo").innerHTML = nameTwoText;
			

			
			
			if (nameOneText == ""|| adjectiveOneText == "" || placeOneText == "" || dayOneText == "" || timeOneText == "" || verbOneText == "" || nounOneText == "" || adjectiveTwoText == "" || nounTwoText == "" || nameTwoText == "")
				{
				document.getElementById("errorMessage").innerHTML = "Error. One or more fields are empty. Please fill in all of the text boxes.";
				}
				
			else {
				document.getElementById("madLibsText").style.display = "initial";
				document.getElementById("errorMessage").innerHTML = "";
				}
		}
	