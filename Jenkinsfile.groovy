pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Getting source code'
                git url: 'https://github.com/Kaskar333/simple_login_cicd.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Building application'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application'
            }
        }
    }
}
