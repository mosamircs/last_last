<?php
    require_once("header.php");
    require_once ("database.php");
    global $formdata;
    $database_instance = Database::getInstance();
    $connection = $database_instance->getConnection();
    $formdata = array();
    // $formdata["userid"] = 0;
    // $formdata["company_name"] = "";
    // $formdata["company_type"] = "";
    // $formdata["company_activity"] = "";
    // $formdata["company_address"] = "";
    // $formdata["capital_value"] = 0;
    // $formdata["capital_share"] = 0;
    $formdata["personal_id"] = "";
    // $formdata["shareholder_name"] = "";
    // $formdata["shareholder_nationality"] = "";
    // $formdata["shareholder_percentage"] = 0;
    $formdata["manager_name"] = "";
    $formdata["manager_nationality"] = "";
    $formdata["perm1"] = "";
    $formdata["perm2"] = "";
    $formdata["perm3"] = "";
    //$formdata["manager_type"] = "";
    $formdata["signdate"] = "";

    if (isset($_POST['userid'])) {
        $formdata["userid"] = $_POST['userid'];
    }
   if (isset($_POST['company_type'])) {
    $company_radio = $_POST['company_type'];
    if ($company_radio == 'option1') {
        $formdata["company_type"] = "شركة ذات مسئولية محدودة";
    } elseif ($company_radio == 'option2') {
        $formdata["company_type"]  = "شركة مساهمة مصري";
    } elseif ($company_radio == 'option3') {
        $formdata["company_type"]  = "شركة شخص واحد ذات مسئولية محدودة";
    } elseif ($company_radio == 'option4') {
        $formdata["company_type"]  = "المنشاة الفردية";
    } elseif ($company_radio == 'option5') {
        $formdata["company_type"]  = "شركة التضامن";
    } elseif ($company_radio == 'option6') {
        $formdata["company_type"]  = "شركة التوصية البسيطة";
    }
    }
    if (isset($_POST["company_name"])) {
        $formdata["company_name"] = json_encode($_POST["company_name"]);
    }
    if (isset($_POST["company_activity"])) {
        $formdata["company_activity"] = $_POST["company_activity"];
    }
    if (isset($_POST["company_address"])) {
        $formdata["company_address"] = $_POST["company_address"];
    }
    if (isset($_POST["capital_value"])) {
        $formdata["capital_value"] = $_POST["capital_value"];
    }
    if (isset($_POST["capital_share"])) {
        $formdata["capital_share"] = $_POST["capital_share"];
    }
    if (isset($_POST["personal_id"])) {
        $formdata["personal_id"] = json_encode($_POST["personal_id"]);
    }
    
    if (isset($_FILES['personal_id'])) {
        $counter = 0;
        foreach ($_FILES['personal_id']['tmp_name'] as $key => $tmp_name) {
            $file_name = $key . $_FILES['personal_id']['name'][$key];
            $file_size = $_FILES['personal_id']['size'][$key];
            $file_tmp = $_FILES['personal_id']['tmp_name'][$key];
            $file_type = $_FILES['personal_id']['type'][$key];
            move_uploaded_file($file_tmp, 'uploads/' . $file_name);
            $counter++;
        }
    }
    if (isset($_POST["shareholder_name"])) {
        $formdata["shareholder_name"] = json_encode($_POST["shareholder_name"]);
    }
    if (isset($_POST["shareholder_nationality"])) {
        $formdata["shareholder_nationality"] = json_encode($_POST["shareholder_nationality"]);
    }
    if (isset($_POST["shareholder_percentage"])) {
        $formdata["shareholder_percentage"] = json_encode($_POST["shareholder_percentage"]);
    }

    if (isset($_POST["manager_name"])) {
        $formdata["manager_name"] = json_encode($_POST["manager_name"]);
    }
    if (isset($_POST["manager_nationality"])) {
        $formdata["manager_nationality"] = json_encode($_POST["manager_nationality"]);
    }
    if (isset($_POST["perm1"])){
        $formdata["perm1"] = json_encode($_POST["perm1"]);
    }
    if(isset($_POST["perm2"])){   
        $formdata["perm2"] = json_encode($_POST["perm2"]);
    }
    if(isset($_POST["perm3"])){   
        $formdata["perm3"] = json_encode($_POST["perm3"]);
    }

   
    if (isset($_POST["manager_type"])) {
        $formdata["manager_type"] = json_encode($_POST["manager_type"]);
    }
    if (isset($_POST["signdate"])){
        $formdata["signdate"] = $_POST["signdate"];
    }
    // if(isset($formdata["company_type"]) && isset($formdata["company_activity"]) && isset($formdata["company_name"])  && isset($formdata["company_address"]) && isset($formdata["capital_value"]) && isset($formdata["capital_share"]) &&  isset($formdata["userid"])){
        $insert_company = "INSERT INTO `companies`(`company_type`,`company_name` , `company_address`, `company_activity`, `capital_value`, `capital_share`,`user_id`) VALUES ('".$formdata["company_type"]."','".$formdata["company_name"]."','".$formdata["company_address"]."','".$formdata["company_activity"]."','".$formdata["capital_value"]."','".$formdata["capital_share"]."','".$formdata["userid"]."')";
        $result = $connection->query($insert_company);  
        $formdata["company_id"] = $connection->insert_id;
    // } 
    // if(isset($formdata["shareholder_name"])&&isset($formdata["shareholder_nationality"])&&isset($formdata["shareholder_percentage"])&&isset($formdata["personal_id"])&&isset($formdata["company_id"])){
        $insert_shareholder = "INSERT INTO `shareholders`(`name`,`nationality` , `percenatage`, `personal_id`,`company_id`) VALUES ('".$formdata["shareholder_name"]."','".$formdata["shareholder_nationality"]."','".$formdata["shareholder_percentage"]."','".$formdata["personal_id"]."','".$formdata["company_id"]."')";
        $result = $connection->query($insert_shareholder);  
    // }
    // if(isset($formdata["manager_name"])&&isset($formdata["manager_nationality"])&&isset($formdata["personal_id"])){
    $insert_manager = "INSERT INTO `managers`(`name`,`nationality` , `personal_id`,`perm1`,`perm2`,`perm3`,`manager_type`,`sign_date`,`company_id`) VALUES ('".$formdata["manager_name"]."','".$formdata["manager_nationality"]."','".$formdata["personal_id"]."','".$formdata["perm1"]."','".$formdata["perm2"]."','".$formdata["perm3"]."','".$formdata["manager_type"]."','".$formdata["signdate"]."','".$formdata["company_id"]."')";
    $result = $connection->query($insert_manager);  
    // }
?>