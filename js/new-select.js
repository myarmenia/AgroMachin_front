const NewSelect = {
  // toggling select.    type: "open" | "close" | "toggle"
  toggle(select, type = "toggle") {
    const options = select.querySelector(".new-select-options-box");
    const height = select.querySelector("ul")?.scrollHeight;
    const icon = select.querySelector(".new-select-icon");

    switch (type) {
      case "toggle": {
        if (!select?.classList?.contains?.("open")) {
          options.style.height = height + "px";
          select.classList.add("open");
          icon.style.rotate = "180deg";
        } else {
          options.style.height = 0;
          select.classList.remove("open");
          icon.style.rotate = "0deg";
        }
        break;
      }
      case "open": {
        if (!select?.classList?.contains?.("open")) {
          options.style.height = height + "px";
          select.classList.add("open");
          icon.style.rotate = "180deg";
        }
        break;
      }
      case "close": {
        options.style.height = 0;
        select.classList.remove("open");
        icon.style.rotate = "0deg";

        break;
      }
    }
  },

  // Just setting select's value
  setValue(select, value = "") {
    const input = select.querySelector("input");
    const placeholder = select.querySelector("[role='select-title']");
    const options = select?.querySelectorAll?.(`li`);
    const chosenOption = select?.querySelector?.(`li[data-value='${value}']`);
    const icon = select.querySelector(".new-select-icon");

    if (!value) return console.error("got no value!!");
    if (chosenOption) {
      options?.forEach((opt) => {
        opt?.classList.remove("active");
      });
      chosenOption.classList.add("active");
    }

    input.value = value.trim();
    placeholder.innerHTML = value.trim();

    input.dispatchEvent(new InputEvent("input"));
    icon.style.rotate = "0deg";
  },

  // clicking to select's option
  optionClick(option) {
    const value = option.getAttribute("data-value");
    const select = option.closest(".new-select");
    this.setValue(select, value);
    this.toggle(select);
  },

  createSelects(root = document) {
    const new_selects = [...root.querySelectorAll(".new-select")];

    new_selects.forEach((sel) => {
      const options = sel.querySelectorAll("ul > li");
      const head = sel.querySelector(".new-select-title-box");
      const input = sel.querySelector("input");

      head.addEventListener("click", (e) =>
        this.toggle(e.target.closest(".new-select"))
      );
      options.forEach((opt) => {
        if (input.value.trim() === opt.getAttribute("data-value").trim())
          this.setValue(sel, input.value);

        opt.addEventListener("click", (e) => this.optionClick(e.target));
      });
    });

    //   closing select's by clicking outside
    document.addEventListener("click", (e) => {
      new_selects.forEach((sel) => {
        if (!sel.contains(e.target)) this.toggle(sel, "close");
      });
    });
  },
};

NewSelect.createSelects();
