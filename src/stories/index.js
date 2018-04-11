import React from "react";
import "../index.css";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";

import AnimalHeader from "../components/AnimalHeader";
import AnnotationHeader from "../components/AnnotationHeader";
import Annotation from "../components/Annotation";
import Selector from "../components/Selector";
import AnnotationSourceSelector from "../components/AnnotationSourceSelector";
import Tagger from "../components/Tagger";
import ConditionTagger from "../components/ConditionTagger";

import conditions from "../constants/conditions";

storiesOf("Welcome", module).add("to Storybook", () => (
    <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
    .add("with text", () => (
        <Button onClick={action("clicked")}>Hello Button</Button>
    ))
    .add("with some emoji", () => (
        <Button onClick={action("clicked")}>😀 😎 👍 💯</Button>
    ));

storiesOf("Animal", module)
    .add("AnimalHeader", () => <AnimalHeader name="Sarıkız" number="54" />)
    .add("AnnotationHeader", () => (
        <AnnotationHeader
            actionType="insemination"
            animalName="Hayvan"
            animalNumber="2000"
        />
    ))
    .add("Annotation", () => <Annotation label="Test annotation" />)
    .add("Select", () => (
        <Selector
            options={[{ value: "val", text: "abc", changed: "onChanged" }]}
        />
    ))
    .add("AnnotationSourceSelector", () => (
        <AnnotationSourceSelector
            options={[{ value: "val", text: "abc", changed: "onChanged" }]}
        />
    ))
    .add("Tagger", () => (
        <Tagger tags={conditions} selected={["disease", "broken"]} />
    ))
    .add("ConditionTagger", () => (
        <ConditionTagger
            onChange={action("clicked")}
            selected={["disease", "broken"]}
        />
    ));
