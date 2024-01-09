node {
    def dockerImageTag = "meryemyousfi/ghm${env.BUILD_NUMBER}"
    def networkName = "mynetwork"
    def buildNumber = env.BUILD_NUMBER
    def minikubeProfile = "minikube"

    try {
        stage('Clone Repo') {
            git url: 'https://github.com/MeryemYOUSFI/BSChain.git',
            branch: 'master'
        }

        stage('Docker Login') { 
            sh "docker login -u meryemyousfi -p dckr_pat_U_J3qrskC990UBFwEjQA48W8EEA"
        }

        stage('Build Docker Images') {
            docker.build("meryemyousfi/ghm:${buildNumber}")
          
        }

        stage('Push Docker Images to Docker Hub') {
            echo "Pushing Docker images to Docker Hub"
            docker.image("meryemyousfi/ghm:${buildNumber}").push()
        }

        stage('Create Docker Network') {
            if (sh(script: "docker network inspect ${networkName}", returnStatus: true) != 0) {
                echo "Creating Docker network: ${networkName}"
                sh "docker network create ${networkName}"
                echo "Successfully created"

            } else {
                echo "Docker network ${networkName} already exists."
            }
        }

    } catch (Exception e) {
        throw e
    }
}

