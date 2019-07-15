#!/bin/bash

ROOT_DIRECTORY="/Users/jacm/projects/reactFeature168_6";
DIR_SIMULATION_BUILD="simulationBuilds";
CURRENT_DATE=`date "+ %Y-%M-%MT%H:%M:%S".txt`;
CURRENT_DATE=$(echo $CURRENT_DATE);
touch "${ROOT_DIRECTORY}/${DIR_SIMULATION_BUILD}/${CURRENT_DATE}";

cd "$ROOT_DIRECTORY/ios"
echo `whoami`
export PATH="/usr/local/bin:/usr/local/:/usr/local/bin/:/Users/jacm/.fastlane/bin:/Users/jacm/.fastlane/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Users/jacm/Library/Android/sdk/emulator:/Users/jacm/Library/Android/sdk/tools:/Users/jacm/Library/Android/sdk/tools/bin:/Users/jacm/Library/Android/sdk/platform-tools:/Users/jacm/Library/Android/sdk/emulator:/Users/jacm/Library/Android/sdk/tools:/Users/jacm/Library/Android/sdk/tools/bin:/Users/jacm/Library/Android/sdk/platform-tools"
/Users/jacm/.fastlane/bin/bundle/lib/ruby/gems/2.2.0/gems/fastlane-2.127.1/bin/fastlane beta

#fastlane beta
