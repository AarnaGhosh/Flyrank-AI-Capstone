# AI Workflow Comparison

## Overview

For this assignment, I built the same Settings Form twice using two different AI prompting approaches. The goal was to compare how prompt quality affects the final implementation.

## Round 1 – Vague Prompt

In the first attempt, I used a short and general prompt asking the AI to build a simple settings form. The AI generated a working solution quickly, but the output lacked detailed validation, accessibility improvements, and a polished user interface. While functional, it required additional manual review and refinement.

## Round 2 – Precise Prompt

For the second attempt, I provided detailed requirements, including validation rules, accessibility expectations, responsive design, required fields, keyboard navigation, and a review step. The generated result was significantly better. The interface looked more professional, validation was stronger, and the AI also reviewed its own implementation and suggested further improvements.

## Comparison

The vague prompt produced code faster, but it required more manual corrections afterward. The precise prompt took longer to write, but it generated higher-quality code with fewer issues. The final implementation was cleaner, easier to maintain, and closer to production quality.

## AI Mistake I Caught

During the first version, the generated form accepted invalid or incomplete input without sufficient validation. I improved the validation by requiring mandatory fields, enforcing proper email formatting, and adding password length checks before accepting the form submission.

## Lessons Learned

This exercise showed me that better prompts produce better results. Clearly defining requirements, validation rules, accessibility expectations, and asking the AI to review its own work greatly improves code quality while reducing debugging time.