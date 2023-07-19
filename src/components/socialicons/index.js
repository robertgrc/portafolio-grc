import React from "react";
import "./style.css";
import {
  FaGithub,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.github && (
          <li>
            <a href="https://github.com/robertgrc">
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.facebook && (
          <li>
            <a href="https://www.facebook.com/robertgary.rodriguezcorrales">
              <FaFacebookF />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a href="https://www.linkedin.com/in/robert-gary-rodriguez-corrales-a7670122b/">
              <FaLinkedin />
            </a>
          </li>
        )}
        {socialprofils.youtube && (
          <li>
            <a href={socialprofils.youtube}>
              <FaYoutube />
            </a>
          </li>
        )}
        {socialprofils.twitch && (
          <li>
            <a href={socialprofils.twitch}>
              <FaTwitch />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
