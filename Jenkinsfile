pipeline {
    agent any
    stages {
	stage('Building the Student Survey Image') {
	    steps {
		script {
		    checkout scm
		    sh 'echo ${BUILD_TIMESTAMP}'
		    withCredentials([usernamePassword(credentialsId: 'docker-pass', passwordVariable: 'password', usernameVariable: 'username')]){
		    	sh "cd  | docker login -u ${username} -p ${password}"
		    }
		    sh "docker build -t liyuqin33/angular645:${BUILD_TIMESTAMP} ."
		}
	    }
	}
	stage('Pushing Image to DockerHub') {
	    steps {
		script {
		    sh 'docker push liyuqin33/angular645:${BUILD_TIMESTAMP}'
		}
	    }
	}
    }
}
