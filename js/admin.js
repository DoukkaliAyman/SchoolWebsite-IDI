let modal = document.getElementById("modal");
function teachers(){
    modal.innerHTML = `
    <div id="btnteach" class="btnstud">
        <div class="head1" style="justify-content: center;">
            <h1>Teachers</h1>
        </div>
        <div class="content1">
            <form action="">
                <div class="first">
                    <p onclick="addteacher()" id="butn1">Add a Teachers</p>
                    <p onclick="delteacher()" id="butn2">Delete a Teacher</p>
                </div>
                <div class="second">
                    <p onclick="editteacher()" id="butn3">Edit a Teacher</p>
                    <p onclick="listteacher()" id="butn4">list All Teacher</p>
                </div>
            </form>
        </div>
    </div>
    `;
}
function students(){
    modal.innerHTML = `
    <div id="btnstud" class="btnstud">
        <div class="head1" style="justify-content: center;">
            <h1>Students</h1>
        </div>
        <div class="content1">
            <form action="">
                <div class="first">
                    <p onclick="addstudent()" id="butn1">Add a Student</p>
                    <p onclick="delstudent()" id="butn2">Delete a Student</p>
                </div>
                <div class="second">
                    <p onclick="editstudent()" id="butn3">Edit a Student</p>
                    <p onclick="liststudent()" id="butn4">list All Students</p>
                </div>
            </form>
        </div>
    </div>
    `;
}
function registers(){
    modal.innerHTML = `
    <div id="register">
        <div style="margin-right: 0;width: 100%;justify-content: center;" class="head1">
            <div style="margin-right: 0;width: 100%;justify-content: center;" class="teach">
                <h1 style="width: 197px;">Registerations</h1>
            </div>
        </div>
        <div class="content1" style="overflow-y: scroll;">
            <form action="" method="POST">
                <div class="divul">
                    <ul class="ulreg">
                        <li>
                            <div onclick="this.parentElement.style.height = '400px';this.parentElement.children[1].style.display = 'block';" class="infoless">
                                <div class="namereg">
                                    First
                                </div>
                                <div class="app">
                                    <p onclick="addstudent1()" class="approve">Approve</p>
                                    <button name="decline" class="decline">Decline</button>
                                </div>
                            </div>
                            <div class="infoness">
                                <div class="allinfo">
                                    <div class="allname">
                                        <label class="alllabel" for="wholename">Full Name: </label>
                                        <input disabled type="text" name="wholename" id="wholename1" value="ahmed saeed" class="wholename">
                                    </div>
                                    <div class="birthdate">
                                        <label class="alllabel" for="birthdate">Birthdate: </label>
                                        <input disabled type="date" name="birthdate" id="birthdate1" value="" class="birthdate1">
                                    </div>
                                    <div class="alltel">
                                        <label class="alllabel" for="wholetel">Telephone: </label>
                                        <input disabled type="tel" name="wholetel" id="wholetel" value="" class="wholetel">
                                    </div>
                                    <div class="allemail">
                                        <label class="alllabel" for="wholeemail">Email: </label>
                                        <input disabled type="email" name="wholeemail" id="wholeemail" value="" class="wholeemail">
                                    </div>
                                    <div class="allsub">
                                        <label class="alllabel" for="subj">Subjects: </label>
                                        <p id="para">
                                            
                                        </p>
                                    </div>
                                    <div class="alltext">
                                        <label class="alllabel" for="textarea">Message: </label>
                                        <textarea name="messa" id="messa" value="" disabled></textarea>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div onclick="this.parentElement.style.height = '400px';this.parentElement.children[1].style.display = 'block';" class="infoless">
                                <div class="namereg">
                                    Second
                                </div>
                                <div class="app">
                                    <p onclick="addstudent1()" class="approve">Approve</p>
                                    <button name="decline" class="decline">Decline</button>
                                </div>
                            </div>
                            <div class="infoness">
                                <div class="allinfo">
                                    <div class="allname">
                                        <label class="alllabel" for="wholename">Full Name: </label>
                                        <input disabled type="text" name="wholename" value="" id="wholename2" class="wholename">
                                    </div>
                                    <div class="birthdate">
                                        <label class="alllabel" for="birthdate">Birthdate: </label>
                                        <input disabled type="date" name="birthdate" value="" id="birthdate1" class="birthdate1">
                                    </div>
                                    <div class="alltel">
                                        <label class="alllabel" for="wholetel">Telephone: </label>
                                        <input disabled type="tel" name="wholetel" value="" id="wholetel" class="wholetel">
                                    </div>
                                    <div class="allemail">
                                        <label class="alllabel" for="wholeemail">Email: </label>
                                        <input disabled type="email" name="wholeemail" value="" id="wholeemail" class="wholeemail">
                                    </div>
                                    <div class="allsub">
                                        <label class="alllabel" for="subj">Subjects: </label>
                                        <p>
                                            
                                        </p>
                                    </div>
                                    <div class="alltext">
                                        <label class="alllabel" for="textarea">Message: </label>
                                        <textarea name="messa" id="messa" value="" disabled></textarea>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div onclick="this.parentElement.style.height = '400px';this.parentElement.children[1].style.display = 'block';" class="infoless">
                                <div class="namereg">
                                    Third
                                </div>
                                <div class="app">
                                    <p onclick="addstudent1()" class="approve">Approve</p>
                                    <button name="decline" class="decline">Decline</button>
                                </div>
                            </div>
                            <div class="infoness">
                                <div class="allinfo">
                                    <div class="allname">
                                        <label class="alllabel" for="wholename">Full Name: </label>
                                        <input disabled type="text" name="wholename" value="" id="wholename3" class="wholename">
                                    </div>
                                    <div class="birthdate">
                                        <label class="alllabel" for="birthdate">Birthdate: </label>
                                        <input disabled type="date" name="birthdate" value="" id="birthdate1" class="birthdate1">
                                    </div>
                                    <div class="alltel">
                                        <label class="alllabel" for="wholetel">Telephone: </label>
                                        <input disabled type="tel" name="wholetel" value="" id="wholetel" class="wholetel">
                                    </div>
                                    <div class="allemail">
                                        <label class="alllabel" for="wholeemail">Email: </label>
                                        <input disabled type="email" name="wholeemail" value="" id="wholeemail" class="wholeemail">
                                    </div>
                                    <div class="allsub">
                                        <label class="alllabel" for="subj">Subjects: </label>
                                        <p>
                                            
                                        </p>
                                    </div>
                                    <div class="alltext">
                                        <label class="alllabel" for="textarea">Message: </label>
                                        <textarea name="messa" id="messa" value="" disabled></textarea>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </form>
        </div>
    </div>
    `;
    var firstname1 = document.getElementById("wholename1").value.split(" ")[0];
    var lastname1 = document.getElementById("wholename").value.split(" ")[1];
}
function notifi(){
    modal.innerHTML = `
    <div id="btnnotif" class="btnstud">
        <div class="head1" style="justify-content: center;">
            <h1 style="width: 170px;">Notifications</h1>
        </div>
        <div class="content1">
            <form action="">
                <div class="first">
                    <p onclick="addnotif()" id="butn1">Add a Notif.</p>
                    <p onclick="delnotif()" id="butn2">Delete a Notif.</p>
                </div>
                <div class="second">
                    <p onclick="editnotif()" id="butn3">Edit a Notif.</p>
                    <p onclick="listnotif()" id="butn4">list All Notif.</p>
                </div>
            </form>
        </div>
    </div>
    `;
}
function addteacher(){
    modal.innerHTML = `
    <div id="addTeacher">
        <div class="head1">
            <div id="tch" class="teach">
                <h1>Add a Teacher</h1>
            </div>
            <div class="menubar">
                <ul>
                    <li><p onclick="listteacher()">List all Teachers</p></li>
                    <li><p onclick="addteacher()">Add a Teacher</p></li>
                    <li><p onclick="delteacher()">Delete a Teacher</p></li>
                    <li><p onclick="editteacher()">Edit a Teacher</p></li>
                </ul>
            </div>
        </div>
        <div class="content1">
            <form action="" method="POST">
                <div class="name">
                    <div class="all">
                        <label for="fname">First Name: </label>
                        <input type="text" name="fname" id="fname">
                    </div>
                    <div class="all">
                        <label for="lname">Last Name: </label>
                        <input type="text" name="lname" id="lname">
                    </div>
                </div>
                <div class="subb">
                    <div class="subj" id="su">
                        <label for="subj">Subjects to be teached: </label>
                        <select multiple name="subjteach" id="subjectteach">
                            <option value="ara">Arabic</option>
                            <option value="eng">English</option>
                        </select>
                    </div>
                </div>
                <div class="con">
                    <div class="all">
                        <label for="tel">TelePhone: </label>
                        <input type="tel" name="tel" id="tel">
                    </div>
                    <div class="all">
                        <label for="email">Email: </label>
                        <input type="email" name="email" id="email">
                    </div>
                </div>
                <div class="num">
                    <div class="all">
                        <label for="nat">National ID: </label>
                        <input type="number" name="nat" id="nat">
                    </div>
                    <div class="all">
                        <label for="starttime">Starting Time: </label>
                        <input type="date" name="start" id="start">
                    </div>
                </div>
                <div class="users">
                    <div class="all">
                        <label for="username">Username: </label>
                        <input type="text" name="username2" id="username2">
                    </div>
                    <div class="all">
                        <label for="pass">Password: </label>
                        <input type="password" name="pass" id="pass">
                        <span class="fas fa-eye" onclick="showpass()" id="eye"></span>
                    </div>
                </div>
                <div class="substud">
                    <input class="btn" type="submit" value="Submit" name="substud">    
                </div>
            </form>
        </div>
    </div>
    `;
}
function delteacher(){
    modal.innerHTML = `
    <div id="deleteteacher1">
        <div class="head1">
            <div id="teach1" style="width: 27%;" class="teach">
                <h1 style="width: 235px;">Delete a Teacher</h1>
            </div>
            <div class="menubar">
                <ul>
                    <li><p onclick="listteacher()">List all Teachers</p></li>
                    <li><p onclick="addteacher()">Add a Teacher</p></li>
                    <li><p onclick="delteacher()">Delete a Teacher</p></li>
                    <li><p onclick="editteacher()">Edit a Teacher</p></li>
                </ul>
            </div>
        </div>
        <div class="content1">
            <form id="form1" action="" method="POST">
                <div style="width: 100%;" class="subb">
                    <div style="width: 100%;flex-flow: column;" class="subj">
                        <label style="font-size: 30px;margin-bottom: 10px;margin-right: 0;" for="Selection">Select a Teacher: </label>
                        <select multiple name="delstud" id="delstud">
                            <option value="fir">first</option>
                            <option value="sec">second</option>
                        </select>
                    </div>
                </div>
                <div class="substud">
                    <input class="btn" value="Delete" type="submit" name="delstudsub" id="delstudsub">
                </div>
            </form>
        </div>
    </div>
    `;
}
function editteacher(){
    modal.innerHTML = `
    <div id="editteacher">
        <div class="head1">
            <div id="tch" class="teach">
                <h1>Edit a Teacher</h1>
            </div>
            <div class="menubar">
                <ul>
                    <li><p onclick="listteacher()">List all Teachers</p></li>
                    <li><p onclick="addteacher()">Add a Teacher</p></li>
                    <li><p onclick="delteacher()">Delete a Teacher</p></li>
                    <li><p onclick="editteacher()">Edit a Teacher</p></li>
                </ul>
            </div>
        </div>
        <div class="content1">
            <form action="" method="POST">
                <div class="name">
                    <div class="all">
                        <label for="fname">First Name: </label>
                        <input type="text" name="fname" id="fname">
                    </div>
                    <div class="all">
                        <label for="lname">Last Name: </label>
                        <input type="text" name="lname" id="lname">
                    </div>
                </div>
                <div class="subb">
                    <div class="subj" id="su">
                        <label for="subj">Subjects to be teached: </label>
                        <select multiple name="subjteach" id="subjectteach">
                            <option value="ara">Arabic</option>
                            <option value="eng">English</option>
                        </select>
                    </div>
                </div>
                <div class="con">
                    <div class="all">
                        <label for="tel">TelePhone: </label>
                        <input type="tel" name="tel" id="tel">
                    </div>
                    <div class="all">
                        <label for="email">Email: </label>
                        <input type="email" name="email" id="email">
                    </div>
                </div>
                <div class="num">
                    <div class="all">
                        <label for="nat">National ID: </label>
                        <input type="number" name="nat" id="nat">
                    </div>
                    <div class="all">
                        <label for="starttime">Starting Time: </label>
                        <input type="date" name="start" id="start">
                    </div>
                </div>
                <div class="users">
                    <div class="all">
                        <label for="username">Username: </label>
                        <input type="text" name="username2" id="username2">
                    </div>
                    <div class="all">
                        <label for="pass">Password: </label>
                        <input type="password" name="pass" id="pass">
                        <span class="fas fa-eye" onclick="showpass()" id="eye"></span>
                    </div>
                </div>
                <div class="substud">
                    <input class="btn" type="submit" value="Edit" name="substud">    
                </div>
            </form>
        </div>
    </div>
    `;
}
function listteacher(){
    modal.innerHTML = `
    <div id="teachers">
        <div class="head1">
            <div class="teach">
                <h1>teachers</h1>
            </div>
            <div class="menubar">
                <ul>
                    <li><p onclick="listteacher()">List all Teachers</p></li>
                    <li><p onclick="addteacher()">Add a Teacher</p></li>
                    <li><p onclick="delteacher()">Delete a Teacher</p></li>
                    <li><p onclick="editteacher()">Edit a Teacher</p></li>
                </ul>
            </div>
        </div>
        <div class="content1">
            <table class="tab1">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>username</th>
                        <th>password</th>
                        <th>email</th>
                        <th>National ID</th>
                        <th>subject</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `;
}
function addstudent(){
    modal.innerHTML = `
    <div id="addStudent">
        <div class="head1">
            <div id="teach1" class="teach">
                <h1>Add a Student</h1>
            </div>
            <div class="menubar">
                <ul>
                    <li><p onclick="liststudent()">List all Students</p></li>
                    <li><p onclick="addstudent()">Add a Student</p></li>
                    <li><p onclick="delstudent()">Delete a Student</p></li>
                    <li><p onclick="editstudent()">Edit a Student</p></li>
                </ul>
            </div>
        </div>
        <div class="content1">
            <form action="" method="POST">
                <div class="name">
                    <div class="all">
                        <label for="fname">First Name: </label>
                        <input type="text" name="fname" id="fname">
                    </div>
                    <div class="all">
                        <label for="lname">Last Name: </label>
                        <input type="text" name="lname" id="lname">
                    </div>
                </div>
                <div class="dt">
                    <div class="all">
                        <label for="bdate">Birth Date: </label>
                        <input type="date" name="bdate" id="bdate">
                    </div>
                </div>
                <div class="con">
                    <div class="all">
                        <label for="tel">TelePhone: </label>
                        <input type="tel" name="tel" id="tel">
                    </div>
                    <div class="all">
                        <label for="email">Email: </label>
                        <input type="email" name="email" id="email">
                    </div>
                </div>
                <div class="num">
                    <div class="all">
                        <label for="nat">National ID: </label>
                        <input type="number" name="nat" id="nat">
                    </div>
                    <div class="all">
                        <label for="starttime">Starting Time: </label>
                        <input type="date" name="start" id="start">
                    </div>
                </div>
                <div class="subb">
                    <div class="subj">
                        <label for="subj">Subjects: </label>
                        <select multiple name="subj" id="subject">
                            <option value="ara">Arabic</option>
                            <option value="eng">English</option>
                        </select>
                    </div>
                </div>
                <div class="users">
                    <div class="all">
                        <label for="username">Username: </label>
                        <input type="text" name="username2" id="username2">
                    </div>
                    <div class="all">
                        <label for="pass">Password: </label>
                        <input type="password" name="pass" id="pass">
                        <span class="fas fa-eye" onclick="showpass()" id="eye"></span>
                    </div>
                </div>
                <div class="substud">
                    <input class="btn" type="submit" value="Submit" name="substud">    
                </div>
            </form>
        </div>
    </div>
    `;
}
function delstudent(){
    modal.innerHTML = `
    <div id="deletestudent1">
        <div class="head1">
            <div id="teach1" style="width: 27%;" class="teach">
                <h1 style="width: 235px;">Delete a Student</h1>
            </div>
            <div class="menubar">
                <ul>
                    <li><p onclick="liststudent()">List all Students</p></li>
                    <li><p onclick="addstudent()">Add a Student</p></li>
                    <li><p onclick="delstudent()">Delete a Student</p></li>
                    <li><p onclick="editstudent()">Edit a Student</p></li>
                </ul>
            </div>
        </div>
        <div class="content1">
            <form id="form1" action="" method="POST">
                <div style="width: 100%;" class="subb">
                    <div style="width: 100%;flex-flow: column;" class="subj">
                        <label style="font-size: 30px;margin-bottom: 10px;margin-right: 0;" for="Selection">Select a Student: </label>
                        <select multiple name="delstud" id="delstud">
                            <option value="fir">first</option>
                            <option value="sec">second</option>
                        </select>
                    </div>
                </div>
                <div class="substud">
                    <input class="btn" value="Delete" type="submit" name="delstudsub" id="delstudsub">
                </div>
            </form>
        </div>
    </div>
    `;
}
function editstudent(){
    modal.innerHTML = `
    <div id="editstudent">
        <div class="head1">
            <div style="width: 25%;" id="teach1" class="teach">
                <h1 style="width: 205px;">Edit a Student</h1>
            </div>
            <div class="menubar">
                <ul>
                    <li><p onclick="liststudent()">List all Students</p></li>
                    <li><p onclick="addstudent()">Add a Student</p></li>
                    <li><p onclick="delstudent()">Delete a Student</p></li>
                    <li><p onclick="editstudent()">Edit a Student</p></li>
                </ul>
            </div>
        </div>
        <div class="content1">
            <form action="" method="POST">
                <div class="name">
                    <div class="all">
                        <label for="fname">First Name: </label>
                        <input type="text" name="fname" id="fname">
                    </div>
                    <div class="all">
                        <label for="lname">Last Name: </label>
                        <input type="text" name="lname" id="lname">
                    </div>
                </div>
                <div class="dt">
                    <div class="all">
                        <label for="bdate">Birth Date: </label>
                        <input type="date" name="bdate" id="bdate">
                    </div>
                </div>
                <div class="con">
                    <div class="all">
                        <label for="tel">TelePhone: </label>
                        <input type="tel" name="tel" id="tel">
                    </div>
                    <div class="all">
                        <label for="email">Email: </label>
                        <input type="email" name="email" id="email">
                    </div>
                </div>
                <div class="num">
                    <div class="all">
                        <label for="nat">National ID: </label>
                        <input type="number" name="nat" id="nat">
                    </div>
                    <div class="all">
                        <label for="starttime">Starting Time: </label>
                        <input type="date" name="start" id="start">
                    </div>
                </div>
                <div class="subb">
                    <div class="subj">
                        <label for="subj">Subjects: </label>
                        <select multiple name="subj" id="subject">
                            <option value="ara">Arabic</option>
                            <option value="eng">English</option>
                        </select>
                    </div>
                </div>
                <div class="users">
                    <div class="all">
                        <label for="username">Username: </label>
                        <input type="text" name="username2" id="username2">
                    </div>
                    <div class="all">
                        <label for="pass">Password: </label>
                        <input type="password" name="pass" id="pass">
                        <span class="fas fa-eye" onclick="showpass()" id="eye"></span>
                    </div>
                </div>
                <div class="substud">
                    <input class="btn" type="submit" value="Edit" name="substud">    
                </div>
            </form>
        </div>
    </div>
    `;
}
function liststudent(){
    modal.innerHTML = `
    <div id="students">
        <div class="head1">
            <div class="teach">
                <h1>Students</h1>
            </div>
            <div class="menubar">
                <ul>
                    <li><p onclick="liststudent()">List all Students</p></li>
                    <li><p onclick="addstudent()">Add a Student</p></li>
                    <li><p onclick="delstudent()">Delete a Student</p></li>
                    <li><p onclick="editstudent()">Edit a Student</p></li>
                </ul>
            </div>
        </div>
        <div class="content1">
            <table class="tab1">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>username</th>
                        <th>password</th>
                        <th>Name</th>
                        <th>Birth Date</th>
                        <th>Telephone</th>
                        <th>Subjects</th>
                        <th>email</th>
                        <th>National ID</th>
                        <th>Finish</th>
                    </tr>
                </thead>
                <tbody style="height:435px;">
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `;
}
function addnotif(){
    modal.innerHTML = `
    <div id="addnotific">
        <div style="margin-right: 0;width: 100%;justify-content: center;flex-flow: row;" class="head1">
            <div style="margin-right: 0;width: 100%;" class="teach">
                <h1 style="width: 260px;">Add a Notification</h1>
            </div>
            <div class="menubar">
                <ul>
                    <li><p onclick="listnotif()">List all Notif.</p></li>
                    <li><p onclick="addnotif()">Add a Notif</p></li>
                    <li><p onclick="delnotif()">Delete a Notif</p></li>
                    <li><p onclick="editnotif()">Edit a Notif</p></li>
                </ul>
            </div>
        </div>
        <div class="content1">
            <form class="form3" action="" method="POST">
                <div class="textare2">
                    <label for="textarea">Message </label>
                    <textarea name="message1" id="message1" cols="40" rows="10"></textarea>
                </div>
                <div class="selectstudteach">
                    <div class="selectteach">
                        <p class="btn allteach">Teacher</p>
                    </div>
                    <div class="selectstud">
                        <p class="btn allteach">Student</p>
                    </div>
                </div>
                <div class="selectperson">
                    <label for="selectperson">Select Person </label>
                    <select multiple name="selectperson" id="selectperson1">
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>
                <div class="submit1">
                    <input class="btn allsub" type="submit" value="Send">
                </div>
            </form>
        </div>
    </div>
    `;
}
function delnotif(){
    modal.innerHTML = `
    <div id="delnotific">
        <div style="margin-right: 0;width: 100%;justify-content: center;flex-flow: row;" class="head1">
            <div style="margin-right: 0;width: 100%;" class="teach">
                <h1 style="width: 285px;">Delete a Notification</h1>
            </div>
            <div class="menubar">
                <ul>
                    <li><p onclick="listnotif()">List all Notif.</p></li>
                    <li><p onclick="addnotif()">Add a Notif</p></li>
                    <li><p onclick="delnotif()">Delete a Notif</p></li>
                    <li><p onclick="editnotif()">Edit a Notif</p></li>
                </ul>
            </div>
        </div>
        <div class="content1">
            <form class="form3" action="" method="POST">
                <div class="selectstudteach">
                    <div class="selectteach">
                        <p class="btn allteach">Teacher</p>
                    </div>
                    <div class="selectstud">
                        <p class="btn allteach">Student</p>
                    </div>
                </div>
                <div class="selectperson">
                    <label for="selectperson">Select Person </label>
                    <select multiple name="selectperson" id="selectperson1">
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>
                <div class="submit1">
                    <input class="btn allsub" name="delnotific1" type="submit" value="Delete">
                </div>
            </form>
        </div>
    </div>
    `;
}
function editnotif(){
    modal.innerHTML = `
    <div id="editnotific">
        <div style="margin-right: 0;width: 100%;justify-content: center;flex-flow: row;" class="head1">
            <div style="margin-right: 0;width: 100%;" class="teach">
                <h1 style="width: 260px;">Edit a Notification</h1>
            </div>
            <div class="menubar">
                <ul>
                    <li><p onclick="listnotif()">List all Notif.</p></li>
                    <li><p onclick="addnotif()">Add a Notif</p></li>
                    <li><p onclick="delnotif()">Delete a Notif</p></li>
                    <li><p onclick="editnotif()">Edit a Notif</p></li>
                </ul>
            </div>
        </div>
        <div class="content1">
            <form class="form3" action="" method="POST">
                <div class="textare2">
                    <label for="textarea">Message </label>
                    <textarea name="message1" id="message1" cols="40" rows="10"></textarea>
                </div>
                <div class="selectstudteach">
                    <div class="selectteach">
                        <p class="btn allteach">Teacher</p>
                    </div>
                    <div class="selectstud">
                        <p class="btn allteach">Student</p>
                    </div>
                </div>
                <div class="selectperson">
                    <label for="selectperson">Select Person </label>
                    <select multiple name="selectperson" id="selectperson1">
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>
                <div class="submit1">
                    <input class="btn allsub" type="submit" value="Edit">
                </div>
            </form>
        </div>
    </div>
    `;
}
function listnotif(){
    modal.innerHTML = `
    <div id="notific">
        <div style="margin-right: 0;width: 100%;justify-content: center;flex-flow: row;" class="head1">
            <div style="margin-right: 0;width: 100%;" class="teach">
                <h1 style="width: 175px;">Notifications</h1>
            </div>
            <div class="menubar">
                <ul>
                    <li><p onclick="listnotif()">List all Notif.</p></li>
                    <li><p onclick="addnotif()">Add a Notif</p></li>
                    <li><p onclick="delnotif()">Delete a Notif</p></li>
                    <li><p onclick="editnotif()">Edit a Notif</p></li>
                </ul>
            </div>
        </div>
        <div class="content1">
            <table class="tab1">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>email</th>
                        <th>Kind</th>
                        <th>message</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>first</td>
                        <td>second</td>
                        <td>third</td>
                        <td>fourth</td>
                        <td>fifth</td>
                    </tr>
                    <tr>
                        <td>first</td>
                        <td>second</td>
                        <td>third</td>
                        <td>fourth</td>
                        <td>fifth</td>
                    </tr>
                    <tr>
                        <td>first</td>
                        <td>second</td>
                        <td>third</td>
                        <td>fourth</td>
                        <td>fifth</td>
                    </tr>
                    <tr>
                        <td>first</td>
                        <td>second</td>
                        <td>third</td>
                        <td>fourth</td>
                        <td>fifth</td>
                    </tr>
                    <tr>
                        <td>first</td>
                        <td>second</td>
                        <td>third</td>
                        <td>fourth</td>
                        <td>fifth</td>
                    </tr>
                    <tr>
                        <td>first</td>
                        <td>second</td>
                        <td>third</td>
                        <td>fourth</td>
                        <td>fifth</td>
                    </tr>
                    <tr>
                        <td>first</td>
                        <td>second</td>
                        <td>third</td>
                        <td>fourth</td>
                        <td>fifth</td>
                    </tr>
                    <tr>
                        <td>first</td>
                        <td>second</td>
                        <td>third</td>
                        <td>fourth</td>
                        <td>fifth</td>
                    </tr>
                    <tr>
                        <td>first</td>
                        <td>second</td>
                        <td>third</td>
                        <td>fourth</td>
                        <td>fifth</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `;
}
function addstudent1(){
    modal.innerHTML = `
    <div id="addStudent">
        <div class="head1">
            <div id="teach1" class="teach">
                <h1>Add a Student</h1>
            </div>
            <div class="menubar">
                <ul>
                    <li><p onclick="liststudent()">List all Students</p></li>
                    <li><p onclick="addstudent()">Add a Student</p></li>
                    <li><p onclick="delstudent()">Delete a Student</p></li>
                    <li><p onclick="editstudent()">Edit a Student</p></li>
                </ul>
            </div>
        </div>
        <div class="content1">
            <form action="" method="POST">
                <div class="name">
                    <div class="all">
                        <label for="fname">First Name: </label>
                        <input type="text" name="fname" value="" id="fname">
                    </div>
                    <div class="all">
                        <label for="lname">Last Name: </label>
                        <input type="text" name="lname" value="" id="lname">
                    </div>
                </div>
                <div class="dt">
                    <div class="all">
                        <label for="bdate">Birth Date: </label>
                        <input type="date" name="bdate" value="" id="bdate">
                    </div>
                </div>
                <div class="con">
                    <div class="all">
                        <label for="tel">TelePhone: </label>
                        <input type="tel" name="tel" value="" id="tel">
                    </div>
                    <div class="all">
                        <label for="email">Email: </label>
                        <input type="email" name="email" value="" id="email">
                    </div>
                </div>
                <div class="num">
                    <div class="all">
                        <label for="nat">National ID: </label>
                        <input type="number" name="nat" value="" id="nat">
                    </div>
                    <div class="all">
                        <label for="starttime">Starting Time: </label>
                        <input type="date" name="start" value="" id="start">
                    </div>
                </div>
                <div class="subb">
                    <div class="subj">
                        <label for="subj">Subjects: </label>
                        <select multiple name="subj" id="subject">
                            <option value="ara">Arabic</option>
                            <option value="eng">English</option>
                        </select>
                    </div>
                </div>
                <div class="users">
                    <div class="all">
                        <label for="username">Username: </label>
                        <input type="text" name="username2" value="" id="username2">
                    </div>
                    <div class="all">
                        <label for="pass">Password: </label>
                        <input type="password" name="pass" value="" id="pass">
                        <span class="fas fa-eye" onclick="showpass()" id="eye"></span>
                    </div>
                </div>
                <div class="substud">
                    <input class="btn" type="submit" value="Submit" name="substud">    
                </div>
            </form>
        </div>
    </div>
    `;
    document.getElementById("fname").value = document.getElementById("wholename").value.split(" ")[0];
    document.getElementById("lname").value = document.getElementById("wholename").value.split(" ")[1];
    document.getElementById("bdate").value = document.getElementById("birthdate1").value;
    document.getElementById("tel").value = document.getElementById("wholetel").value;
    document.getElementById("email").value = document.getElementById("wholeemail").value;
}