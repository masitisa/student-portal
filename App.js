import { StatusBar,useSta } from 'react-native';
import { StyleSheet, Text, View,Image } from 'react-native';
import { ScrollView } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ScrollView,TouchableOpacity, Text,flag, View , Button , Image  } from 'react-native';
import { SimpleLineIcons,Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <>
    <StatusBar style="auto" />
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Image source={require('./assets/pic.png')} style={{width:100,height:100, borderRadius:50}} />
        </View>
        <View style={styles.info} >
          <Text style={{fontWeight:'bold',fontSize:26}}>Napo Ramaota</Text>
          <Text style={styles.studentNum} >901013599</Text>
          <Text style={{fontWeight:'bold'}}>BSCSM</Text>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
            <Text style={styles.butn}> Edit </Text>
            <Text style={styles.butn}> Settings </Text>

      <View style={styles.secondContainer}>
        <View style={styles.Profile}>
          <TouchableOpacity>
           <SimpleLineIcons name="options-vertical" style={{marginTop:8}} size={26} color="black" />
          </TouchableOpacity>
           <View style={styles.ProfilePicture}>
             <Image source={require("./assets/Profile.jpg")}
              style={{height:160,width:160,borderRadius: 75}}/>
           </View>
            <Ionicons name="search" size={22} color="black" style={{marginTop:8, marginStart:-27}}/>
              <TouchableOpacity>
               <View style={styles.searchBox}>
                 <Text style={styles.searchText}>Search here:</Text>
               </View>
             </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView >
        <View style={styles.results}>
        <View style={styles.semesters}>
          <View style={styles.semester}>
            <Text style={styles.semesterNum}>Semester 4</Text>
            <View style={styles.moduleInfo}>
              <View style={styles.module}>
                <Text style={styles.moduleName}>Module</Text>
                <Text style={styles.moduleGrade}>Grades</Text>
              </View>
            </View>
            <View style={styles.moduleInfo}>
              <View style={styles.module}>
                <Text style={styles.moduleName}>Mobile Device Programing</Text>
                <View style={styles.process}>
                  <View style={styles.time}/>
                </View>
              </View>
            </View>
            <View style={styles.moduleInfo}>
              <View style={styles.module}>
                <Text style={styles.moduleName}>Software Design & modelling</Text>
                <View style={styles.process}>
                  <View style={styles.time}/>
                </View>
              </View>
            </View>
            <View style={styles.moduleInfo}>
              <View style={styles.module}>
                <Text style={styles.moduleName}>C++ Programing 2</Text>
                <View style={styles.process}>
                  <View style={styles.time}/>
                </View>
              </View>
            </View>
            <View style={styles.moduleInfo}>
              <View style={styles.module}>
                <Text style={styles.moduleName}>Java Programing 1</Text>
                <View style={styles.process}>
                  <View style={styles.time}/>
                </View>
              </View>
            </View>
            <View style={styles.moduleInfo}>
              <View style={styles.module}>
                <Text style={styles.moduleName}>Probability & Statistics</Text>
                <View style={styles.process}>
                  <View style={styles.time}/>
                </View>
              </View>
            </View>
            <View style={styles.moduleInfo}>
              <View style={styles.module}>
                <Text style={styles.moduleName}>Database System</Text>
                <View style={styles.process}>
                  <View style={styles.time}/>
                </View>
              </View>
            </View>
            <View style={styles.Details}>
             <Text style={styles.Names}>Rorisang Molise</Text>
             <Text style={styles.studentID}>ID: 901013604</Text>
           </View>
            <Text style={styles.Semesters}>
         Semester1        GPA:  2.82          CGPA:  2.82 

             </Text>
             <ScrollView>
          <View style={styles.SModules}>
            <Text >        Algebra                                                                  C-       </Text>
             <Text>  Business communication                                C+ </Text>
            <Text >  Creative and inovation studies                         B- </Text>
            <Text >  Fundamentals of design                                    A-</Text>
            <Text >    Intoduction to computer skills                          C+ </Text>
            <Text > Principles of programming                                C</Text>

          </View>
          <View style={styles.semester}>
            <View style={styles.semesterNum}>
              <Text style={styles.semesterNum}>Semester 3</Text>
            </View>

            <View style={styles.moduleInfo}>
            <View style={styles.module}>
                <Text style={styles.moduleName}>Module</Text>
                <Text style={styles.moduleGrade}>Grades</Text>
              </View>
              <View style={styles.module}>
                <Text style={styles.moduleName}>Calculas 2</Text>
                <View style={styles.moduleGrade}>
                  <Text style={styles.grade}>B</Text>
                </View>
              </View>
              <View style={styles.module}>
                <Text style={styles.moduleName}>Principles of Web Design</Text>
                <View style={styles.moduleGrade}>
                  <Text style={styles.grade}>B</Text>
                </View>
              </View>
              <View style={styles.module}>
                <Text style={styles.moduleName}>Fundmentals of Iternet Technology</Text>
                 <View style={styles.moduleGrade}>
                  <Text style={styles.grade}>C-</Text>
                </View>
              </View>
              <View style={styles.module}>
                <Text style={styles.moduleName}>Multimedia Technology</Text>
                <View style={styles.moduleGrade}>
                  <Text style={styles.grade}>B+</Text>
                </View>
              </View>
              <View style={styles.module}>
                <Text style={styles.moduleName}>C++ Programing 1</Text>
                <View style={styles.moduleGrade}>
                  <Text style={styles.grade}>C+</Text>
                </View>
              </View>
              <View style={styles.module}>
                <Text style={styles.moduleName}>Data Communication & Networking</Text>
                <View style={styles.moduleGrade}>
                  <Text style={styles.grade}>C</Text>
                </View>
              </View>
            </View>
          <Text style={styles.Semesters}>
            Semester2      GPA:  2.82          CGPA:  2.68
          </Text>

          <View style={styles.SModules}>
            <Text >  Intoduction to digital graphics                       C+ </Text>
            <Text >Intoduction to multimedia                              B </Text>
            <Text >Calculus I                                                          PX</Text>
            <Text >Intoduction to databse                                    B-</Text>
            <Text >Intoduction to digital imaging                        C-</Text>
            <Text >Principles of software engeneering              C</Text>

          </View>
          <View style={styles.semester}>
            <Text style={styles.semesterNum}>Semester 2</Text>
            <View style={styles.moduleInfo}>
              <View style={styles.module}>
                <Text style={styles.moduleName}>Calculus</Text>
                <View style={styles.moduleGrade}>
                  <Text style={styles.grade}>C-</Text>
                </View>
              </View>
              <View style={styles.module}>
                <Text style={styles.moduleName}>Introductionto Data Communication</Text>
                <View style={styles.moduleGrade}>
                  <Text style={styles.grade}>B</Text>
                </View>
              </View>
              <View style={styles.module}>
                <Text style={styles.moduleName}>Introduction to Digital Imaging</Text>
                <View style={styles.moduleGrade}>
                  <Text style={styles.grade}>B</Text>
                </View>
              </View>
              <View style={styles.module}>
                <Text style={styles.moduleName}>Introduction to Digital Graphics</Text>
                <View style={styles.moduleGrade}>
                  <Text style={styles.grade}>C</Text>
                </View>
              </View>
              <View style={styles.module}>
                <Text style={styles.moduleName}>Introduction to Multimedia</Text>
                <View style={styles.moduleGrade}>
                  <Text style={styles.grade}>B-</Text>
                </View>
              </View>
              <View style={styles.module}>
                <Text style={styles.moduleName}>Introduction to Databaces</Text>
                <View style={styles.moduleGrade}>
                  <Text style={styles.grade}>C</Text>
                </View>
              </View>

          <Text style={styles.Semesters}>
            Semester3      GPA:  2.19        CGPA:  2.46
          </Text>

          <View style={styles.SModules}>
            <Text>  C++ programmiing                                          C+ </Text>
            <Text>  Multimedia                                                       B- </Text>
            <Text>Calculus II                                                         F</Text>
            <Text>  Internet technology                                         C+</Text>
            <Text>  Data com & networking                                  C+</Text>
            <Text> Principles of web design                                B- </Text>

            </View>
          </View>
          <View style={styles.semester}>
            <Text style={styles.semesterNum}>Semester 1</Text>
            <View style={styles.moduleInfo}>
              <View style={styles.module}>
                <Text style={styles.moduleName}>Creative Studies</Text>
                <View style={styles.moduleGrade}>
                  <Text style={styles.grade}>B</Text>
                </View>
              </View>
              <View style={styles.module}>
                <Text style={styles.moduleName}>Principles of Programing Logic & Design</Text>
                <View style={styles.moduleGrade}>
                  <Text style={styles.grade}>B</Text>
                </View>
              </View>
              <View style={styles.module}>
                <Text style={styles.moduleName}>Fundamentals of Design</Text>
                <View style={styles.moduleGrade}>
                  <Text style={styles.grade}>B-</Text>
                </View>
              </View>
              <View style={styles.module}>
                <Text style={styles.moduleName}>Introduction to Computer skills</Text>
                <View style={styles.moduleGrade}>
                  <Text style={styles.grade}>C+</Text>
                </View>
              </View>
              <View style={styles.module}>
                <Text style={styles.moduleName}>Business Communication</Text>
                <View style={styles.moduleGrade}>
                  <Text style={styles.grade}>C+</Text>
                </View>
              </View>
              <View style={styles.module}>
                <Text style={styles.moduleName}>Algebra</Text>
                <View style={styles.moduleGrade}>
                  <Text style={styles.grade}>B</Text>
                </View>
              </View>
            <Text style={styles.Semesters}>
            Semester4      GPA:  2.19        CGPA:  2.46
          </Text> 

            <View style={styles.S4Modules}>
            <Text> RESULTS = NULL</Text>

            </View>
          </View>
        </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />


            </ScrollView>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#060608',
    backgroundColor: 'rgb(0, 184, 212)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  results:{
    width:'100%',
    alignItems:'center'
  },
  module:{
    flexDirection:'row',
    margin:5
  },
  semesters:{
    backgroundColor:"gray",
    width:'95%',
    margin:'5%',
    borderRadius:20,

  },
  info:{
    width:'100%',
    backgroundColor:'blue',

  },
  semester:{
    backgroundColor:'#ddd',
    margin:10,
    borderRadius:10,
    padding:10

  },
  moduleName:{
    width:'70%'
  },
  semesterNum:{
    fontWeight:'bold',
    backgroundColor:'#70d70b',
    color:'#fff',
    padding:3,
    borderRadius:9
  },
  info:{
    marginLeft:30,

    padding:5,
  secondContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    width:370,
    marginTop: 25,
    backgroundColor: 'rgb(0, 184, 212)',
    flex:1,

  },
  Profile:{

    height:240,
    width:350,
    backgroundColor: 'rgb(0, 184, 212)',
    flexDirection: 'row',
  },
  searchBox:{
  flexDirection: 'row',
  height:27,
  width:110,
  backgroundColor: 'rgb(3, 169, 244)',
  borderRadius: 5,
  marginTop:6, 
  },
  ProfilePicture:{
  height: 150,
  width: 150,
  borderRadius:75,
  backgroundColor: 'rgb(0, 184, 212)',
  marginStart:60,
  marginTop: 65,
  },
  searchText:{
    fontSize: 18,
    color:'black'

  },
  profilePic:{
    height:200,
    backgroundColor: '#fff'

  },
  moduleInfo:{
    margin:5
  },
  process:{
    backgroundColor:'gray',
    height:10,
    width:65,
    borderRadius:50,
    borderColor:'gray',
    borderWidth:1,
    shadowColor:'white',
  },
  time:{
    backgroundColor:'#70d70b',
    height:'100%',
    width:'50%',
    borderRadius:30
  Details:{
   backgroundColor: 'rgb(0, 184, 212)',
   width:350,
   alignItems: 'center',
   justifyContent: 'center',
  },
  moduleGrade:{
    width:'20%',
    alignItems:'center'
  Names: {
    fontSize:28,
  },
  grade:{
    fontWeight:'bold'
  studentID:{
    fontSize:20,
  },
  header:{
    flexDirection:'row',
    backgroundColor:'#B2FF59',
    padding:10,
    width:'95%',
    borderRadius:20,
    alignItems:'flex-start',
    margin:'5%'
  Semesters:{
    width:340,
    fontSize:17,
    color:'black',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'rgb(3, 169, 244)'
  },
  studentNum:{
    fontWeight:"bold",
    fontStyle:'italic',
    color:'#fff',
    fontSize:20

  SModules:{
    fontSize:20,
    color:'black',
    width:340,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'rgb(0, 229, 255)'

  },
  butn:{
    borderRadius:40,
    borderColor:'#000',
    borderWidth:1,
  S4Modules:{

    fontSize:20,
    color:'black',
    width:340,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'rgb(0, 229, 255)'
  }


});