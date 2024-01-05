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

    } catch (Exception e) {
        throw e
    }
}

