#!/bin/bash

ROOT_DIRECTORY="/Users/jacm/projects/reactFeature168_6";
DIR_SIMULATION_BUILD="simulationBuilds";
CURRENT_DATE=`date "+ %Y-%M-%MT%H:%M:%S".txt`;
CURRENT_DATE=$(echo $CURRENT_DATE);
touch "${ROOT_DIRECTORY}/${DIR_SIMULATION_BUILD}/${CURRENT_DATE}";

cd "$ROOT_DIRECTORY/ios"
pwd
whoami
fastlane beta
