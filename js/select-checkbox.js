class CheckboxesSelectModel {
  constructor(card_name) {
    this.card_name = card_name;
  }
  // toggling select.    type: "open" | "close" | "toggle"
  toggle = (select, type = "toggle") => {
    const options = select.querySelector("[role='options-box']");
    const height = options?.scrollHeight;
    const icon = select.querySelector("[role='icon']");
    switch (type) {
      case "toggle": {
        if (!select?.classList?.contains?.("open")) {
          options.style.maxHeight = height + "px";
          select.classList.add("open");
          icon.style.rotate = "180deg";
        } else {
          options.style.maxHeight = 0;
          select.classList.remove("open");
          icon.style.rotate = "0deg";
        }
        break;
      }
      case "open": {
        if (!select?.classList?.contains?.("open")) {
          options.style.maxHeight = height + "px";
          select.classList.add("open");
          icon.style.rotate = "180deg";
        }
        break;
      }
      case "close": {
        options.style.maxHeight = 0;
        select.classList.remove("open");
        icon.style.rotate = "0deg";

        break;
      }
    }
  };

  //   type: "add" | "remove" | "toggle"
  toggleOption = (option, type = "toggle") => {
    const checkbox = option.querySelector("input[type='checkbox']");
    switch (type) {
      case "toggle": {
        if (!checkbox?.checked) {
          checkbox.checked = true;
        } else {
          checkbox.checked = false;
        }
        break;
      }
      case "add": {
        checkbox.checked = true;
      }
      case "remove": {
        checkbox.checked = false;
      }
    }
    checkbox.dispatchEvent(new InputEvent("change"));
  };

  submit = (select) => {
    const input = select.querySelector("input[type='text']");
    const select_index = select.getAttribute("data-checkboxes-select-num");
    const boxes_place = document.querySelector(
      `[data-checkboxes-content-num="${select_index}"]`
    );
    const chosenCheckboxes = [
      ...select.querySelectorAll('input[type="checkbox"]'),
    ].filter((opt) => opt?.checked);

    boxes_place.innerHTML = chosenCheckboxes
      .map((checkbox) => {
        return `
        <div class="${this.card_name}" data-value="${checkbox?.value}">
            <span>${checkbox?.nextElementSibling?.innerHTML}</span>
            <div class="delete"">X</div>
        </div>`;
      })
      .join("");

    boxes_place.querySelectorAll(".delete").forEach((del) => {
      del.addEventListener("click", (e) =>
        this.delete(e.target.closest(`.${this.card_name}`))
      );
    });

    this.toggle(select, "close");
    input.value = chosenCheckboxes.map((c) => c?.value).join(",");
  };

  resetUnusables = (select) => {
    const select_index = select.getAttribute("data-checkboxes-select-num");
    const boxes_place = document.querySelector(
      `[data-checkboxes-content-num="${select_index}"]`
    );
    const checkboxes = select.querySelectorAll("input[type='checkbox']");
    const checkbox_cards = [
      ...boxes_place.querySelectorAll(`.${this.card_name}`),
    ];

    checkboxes.forEach((c) => {
      c.checked = false;
      c.dispatchEvent(new InputEvent("change"));
    });

    checkboxes.forEach((checkbox) => {
      checkbox.checked = checkbox_cards.some(
        (c) => c.getAttribute("data-value") == checkbox?.value
      );
      checkbox.dispatchEvent(new InputEvent("change"));
    });
  };

  delete = (box) => {
    const value = box.getAttribute("data-value");
    const container_index = box
      .closest("[data-checkboxes-content-num]")
      .getAttribute("data-checkboxes-content-num");

    const select = document.querySelector(
      `[data-checkboxes-select-num="${container_index}"]`
    );
    const chosen_option = select.querySelector(`input[value="${value}"]`);
    const input = select.querySelector("input[type='text']");

    chosen_option.checked = false;
    chosen_option.dispatchEvent(new InputEvent("change"));
    input.value = input?.value
      .split(",")
      .filter((v) => v !== value)
      .join(",");
    box.remove();
  };

  createSelects = (root = document) => {
    const new_selects = [...root.querySelectorAll(".new-checkboxes-select")];

    new_selects.forEach((sel) => {
      const options = sel.querySelectorAll("ul > li");
      const checkboxes = sel.querySelectorAll("input[type='checkbox']");
      const head = sel.querySelector("[role='head']");
      const input = sel.querySelector("input");
      const btn = sel.querySelector("button");

      btn.addEventListener("click", () => this.submit(sel));

      head.addEventListener("click", (e) =>
        this.toggle(e.target.closest(".new-checkboxes-select"))
      );
      options.forEach((opt) => {
        if (input.value.trim() === opt.getAttribute("data-value")?.trim())
          this.setValue(sel, input.value);

        opt.addEventListener("click", (e) => this.toggleOption(e.target));
      });

      checkboxes.forEach((c) => {
        c.addEventListener("change", (e) => {
          const option = e.target.closest("li");
          if (c?.checked) option.classList.add("active");
          else option.classList.remove("active");
        });
      });
    });

    //   closing select's by clicking outside
    document.addEventListener("click", (e) => {
      new_selects.forEach((sel) => {
        if (!sel.contains(e.target)) {
          this.resetUnusables(sel);
          this.toggle(sel, "close");
        }
      });
    });
  };
}

const CheckboxesSelect = new CheckboxesSelectModel("checkbox-card");
CheckboxesSelect.createSelects();
