import { Navbar } from "@/components/nav";
import React from "react";
import { PrepareBetter } from "./sections/PrepareBetter";
import { LearningMonitor } from "./sections/LearningMonitor";
import { TrustedByStudent } from "./sections/TrustedByStudent";
import { WhyWorkingHard } from "./sections/WhyWorkingHard";
import { TrainUnderFire } from "./sections/TrainUnderFire";
import { WhatYouAreMissing } from "./sections/WhatYouAreMissing";
import { GrowWithFriends } from "./sections/GrowWithFriends";
import { ExplorePastQuest } from "./sections/ExplorePastQuest";
import { JambQuestion } from "./sections/JambQuestion";
import { Testimony } from "./sections/Testimony";
import { Pricing } from "./sections/Pricing";
import { Footer } from "@/components/footer";


const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <PrepareBetter />
        <LearningMonitor />
        <TrustedByStudent />
        <WhyWorkingHard />
        <TrainUnderFire />
        <WhatYouAreMissing />
        <GrowWithFriends />
        <ExplorePastQuest />
        <JambQuestion />
        <Testimony />
        <Pricing />
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
