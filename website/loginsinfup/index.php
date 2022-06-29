<?php
	$lang = 'C';
	if(!isset($_COOKIE['lang'])) {
		setcookie('lang', $lang, time()+3600);
		$_COOKIE['lang'] = $lang;
	}

	if(!isset($_COOKIE['problem'])) {
		setcookie('problem', 1, time()+3600);
		$_COOKIE['problem'] = 1;
	}


	if($_COOKIE['problem'] == 1) {
		echo "<script>window.addEventListener('load', function () {  let activeTab = document.querySelector('.active'); if (activeTab) activeTab.classList.remove('active'); document.getElementById('problem1').className += 'active'; });</script>";
	}

	if($_COOKIE['problem'] == 2) {
		echo "<script>window.addEventListener('load', function () {  let activeTab = document.querySelector('.active'); if (activeTab) activeTab.classList.remove('active'); document.getElementById('problem2').className += 'active'; });</script>";
	}

	function executeCode($lang) {

		$codeFile = "code.c";
		$exeFile = "a.exe";
		$outputFile = "output.txt";
		$classFile = "Code.class";
		
		if($lang == "C") {
			$output = exec("gcc code.c & a > output.txt");
		}
		
		if($lang == "C++") {
			$codeFile = "code.cpp";
			$output = exec("g++ code.cpp & a > output.txt");
		}

		if($lang == "Java") {
			$codeFile = "Code.java";
			$output = exec("javac Code.java & java Code > output.txt");
		}

		if(file_exists($outputFile)) {

			$output = file($outputFile, FILE_IGNORE_NEW_LINES);
			
			foreach($output as $o) {
				echo '<script>';
				echo 'window.addEventListener("load", function () {  const para = document.createElement("p"); const line = document.createTextNode("'.$o.'"); para.appendChild(line); document.getElementById("output-container").appendChild(para)})';
				echo '</script>';
			}

			$file = null;
			unlink($outputFile);
		}

		if(file_exists($codeFile)) {
			$tempFile = "temp";
			
			if($_COOKIE['problem'] == 1) {
				if($lang == "C") {
					$tempFile = $tempFile.".c";
				}
	
				if($lang == "C++") {
					$tempFile = $tempFile.".cpp";
				}
	
				if($lang == "Java") {
					$tempFile = "Temp";
					$tempFile = $tempFile.".java";
				}
			}

			if($_COOKIE['problem'] == 2) {
				$tempFile = "temp2.c";

				if($lang == "C++") {
					$tempFile = "temp2.cpp";
				}

				if($lang == "Java") {
					$tempFile = "Temp2.java";
				}
			}
			
			copy($codeFile, $tempFile);
			unlink($codeFile);
		}

		if($_COOKIE['lang'] == 'C' || $_COOKIE['lang'] == 'C++'){
			if(file_exists($exeFile)) {
				unlink($exeFile);
			}else {
				echo "<script>alert('Error(s) found');</script>";
			}
		}

		if($_COOKIE['lang'] == 'Java') {
			if(file_exists($classFile)) {
				unlink($classFile);
			}else {
				echo "<script>alert('Error(s) found');</script>";
			}
		}
		

	}

	if(array_key_exists('run', $_POST)) {
		executeCode($_COOKIE['lang']);
	}

	if(array_key_exists('langSave', $_POST)) {
		
		setcookie('lang', $_POST['langSelect'], time()+3600);
		$_COOKIE['lang'] = $_POST['langSelect'];
		
		setcookie('problem', 1, time()+3600);
		$_COOKIE['problem'] = 1;
	}

	if(array_key_exists('problem1', $_POST)) {
		setcookie('problem', 1, time()+3600);
		$_COOKIE['problem'] = 1;

		$lang = $_COOKIE['lang'];
		$file = "temp.c";

		if($lang == "C++") {
			$file = "temp.cpp";
		}

		if($lang == "Java") {
			$file = "Temp.java";
		}

		echo "<script> ";
		echo "window.addEventListener('load', function () { document.getElementById('textbox').value = '". file_get_contents($file). "'; }";
		echo "</script>";
	}

	if(array_key_exists('problem2', $_POST)) {

		

		setcookie('problem', 2, time()+3600);
		$_COOKIE['problem'] = 2;

		$lang = $_COOKIE['lang'];
		$file = "temp2.c";

		if($lang == "C++") {
			$file = "temp2.cpp";
		}

		if($lang == "Java") {
			$file = "Temp2.java";
		}

		echo "<script> ";
		echo "window.addEventListener('load', function () { document.getElementById('textbox').value = '". file_get_contents($file). "'; }";
		echo "</script>";
	}
	
?>

<!DOCTYPE html>
<html>
	<head>
		<title>Troubleshoot - Quest '22</title>

		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />

		<link rel="icon" type="image/x-icon" href="./assets/images/quest-logo.png">
		<link rel="stylesheet" type="text/css" media="screen" href="./css/styles.css" />
	</head>
	
	<body>
		
		<div class="header row">
			<div class="col logo">
				<img src="./assets/images/jntuh-logo.png" />
			</div>
			<div class="col">
				<h2>TROUBLESHOOT - QUEST '22</h1>
				<h3>Department of Computer Science & Engineering</h3>
				<h3>JNTUH University College of Engineering Hyderabad (Autonomous)</h3>
			</div>

			<div class="col logo">
				<img src="./assets/images/quest-logo.png" />
			</div>
		</div>

		<hr/>

		<div class="row">
			<div class="col">
				<label for="langSelect">Choose language : </label>
				<form method="post">
					<select name="langSelect" id="langSelect">
						<option value="C" <?php if($_COOKIE['lang'] == 'C') echo 'selected = "selected"' ?>>C</option>
						<option value="C++" <?php if($_COOKIE['lang'] == 'C++') echo 'selected = "selected"' ?>>C++</option>
						<option value="Java" <?php if($_COOKIE['lang'] == 'Java') echo 'selected = "selected"' ?>>Java</option>
					</select>

					<input type ="submit" id="langSave" name="langSave" value="Save"/>
				</form>
			</div>

			<div class="col">
				<div class="tab">
					<form method="post">
						<button class="tab active" id="problem1" name="problem1" >Problem 1</button>
						<button class="tab" id="problem2" name="problem2" >Problem 2</button>
					</form>
				</div>
			</div>
			<div class="col">
				<form method="post">
					<button class="button runButton" id="run" name="run">Run</button>
				</form>
			</div>
		</div>

		<div class="parentContainer row">
			<textarea id="textbox" class=" col code-editor" placeholder="Code Here..." spellcheck="false"><?php if($_COOKIE['lang'] == "C" && file_exists("temp.c") && $_COOKIE['problem'] == 1) {echo file_get_contents("temp.c");} if($_COOKIE['lang'] == "C" && file_exists("temp2.c") && $_COOKIE['problem'] == 2) {echo file_get_contents("temp2.c");} if($_COOKIE['lang'] == "C++" && file_exists("temp.cpp") && $_COOKIE['problem'] == 1) {echo file_get_contents("temp.cpp");} if($_COOKIE['lang'] == "C++" && file_exists("temp2.cpp") && $_COOKIE['problem'] == 2) {echo file_get_contents("temp2.cpp");} if($_COOKIE['lang'] == "Java" && file_exists("Temp.java") && $_COOKIE['problem'] == 1) {echo file_get_contents("Temp.java");} if($_COOKIE['lang'] == "Java" && file_exists("Temp2.java") && $_COOKIE['problem'] == 2) {echo file_get_contents("Temp2.java");}?></textarea>

			<div class="col output-container" id="output-container">
				<b>Output</b>
			</div>
		</div>

		<script src="./js/main.js"></script>
	</body>
</html>