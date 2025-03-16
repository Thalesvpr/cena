"use client";

import React from "react";
import { metadata } from "../metadata";
import { Button } from "@/widgets/Button";
import { IconName } from "@/utils/iconUtils";

export const SocialLinks = () => {
  return (
    <div className="flex gap-4 justify-center">
      {metadata.brand.social.map((social, index) => {
        return (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
          >
            <Button icon={social.icon as IconName} themeColor="primary" raw />
          </a>
        );
      })}
    </div>
  );
};
