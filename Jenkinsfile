pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout your code from your repository
                git 'https://github.com/HARSHILKHANDELWAL/CalculatorBackendJenkins.git'
            }
        }
        
        stage('Build') {
            steps {
                // Install node modules
          bat 'mvn clean install'
            }
        }
        
         stage('Checkout_2') {
            steps {
                // Checkout your code from your repository
             git branch:'main',url:'https://github.com/HARSHILKHANDELWAL/ReactCalculatorJenkins.git'
            }
        }
        
   
        
        
        stage('Deploy') {
            steps {
                // Build your React project
         bat 'copy C:\\Users\\Harshil\\.jenkins\\workspace\\GentratingWarFileSCM\\target\\ApiTest.war C:\\Projects\\Software\\apache-tomcat-10.1.17\\webapps\\'

            }
        }
        
        
        stage('Start Tomcat'){
            steps{
                
                dir('C:\\Projects\\Software\\apache-tomcat-10.1.17\\bin')
                {
                    bat 'startup.bat'
                }
            }
        }

           stage('Build_2'){
          steps{
                bat 'npm install'
                bat 'start npm start'
          }
      
      }
      

      //SELENIUM
      //Testinh
     stage('Clone') {
        steps {
            dir('C:\\Users\\Harshil\\.jenkins\\workspace\\Selenium Testing') {
                git 'https://github.com/HARSHILKHANDELWAL/SeleniumJenkins.git'
                bat 'mvn test'
             }
        }
      }
    stage('Demo Approval'){
         input{
            message 'Pause for Demo: Click "Proceed" to continue.'
            ok 'Proceed'
         }
        steps{
             echo 'Demo Approved. Resuming the pipeline'
            }
     }
    }
    
   
}
