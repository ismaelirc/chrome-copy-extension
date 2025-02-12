import {beforeEach, describe, expect, it, vi} from "vitest";
import loadNotesGateway from "../scripts/datagateways/LoadNotesGateway";
import saveNotesGateway from "../scripts/datagateways/SaveNotesGateway";

describe("Notes Gateway", () => {
  // Mock localStorage before each test
  beforeEach(() => {
    // Create a mock of localStorage
    const localStorageMock = {
      getItem: vi.fn(),
      setItem: vi.fn(),
      clear: vi.fn(),
    };

    // Assign it to the global object
    global.localStorage = localStorageMock;
  });

  describe("loadNotesGateway", () => {
    it("should return empty array when localStorage is empty", () => {
      // Setup
      localStorage.getItem.mockReturnValue(null);

      // Execute
      const result = loadNotesGateway();

      // Assert
      expect(result).toEqual([]);
      expect(localStorage.getItem).toHaveBeenCalledWith("notes");
    });

    it("should return parsed notes from localStorage", () => {
      // Setup
      const mockNotes = [
        {id: 1, content: "Test note 1"},
        {id: 2, content: "Test note 2"},
      ];
      localStorage.getItem.mockReturnValue(JSON.stringify(mockNotes));

      // Execute
      const result = loadNotesGateway();

      // Assert
      expect(result).toEqual(mockNotes);
      expect(localStorage.getItem).toHaveBeenCalledWith("notes");
    });
  });

  describe("saveNotesGateway", () => {
    it("should save notes to localStorage", () => {
      // Setup
      const notesToSave = [
        {id: 1, content: "Test note 1"},
        {id: 2, content: "Test note 2"},
      ];

      // Execute
      saveNotesGateway(notesToSave);

      // Assert
      expect(localStorage.setItem).toHaveBeenCalledWith(
        "notes",
        JSON.stringify(notesToSave)
      );
    });
  });

  describe("deleteNoteGateway", () => {
    it("should return an array without the item passed as a parameter", () => {
      function handleEvent(event) {
        const parentId = event.target.parentNode?.parentNode?.id;
        return parentId;
      }

      const notesToSave = [
        {id: 1, content: "Test note 1"},
        {id: 2, content: "Test note 2"},
      ];
      localStorage.getItem.mockReturnValue(JSON.stringify(notesToSave));

      const granparent = document.createElement("div");
      granparent.id = 1;

      const parent = document.createElement("div");
      granparent.appendChild(parent);

      const button = document.createElement("button");
      parent.appendChild(button);

      const mockEvent = new Event("click");

      Object.defineProperty(mockEvent, "target", {value: button});

      const result = handleEvent(mockEvent);

      expect(result).toBe("1");
    });
  });
});
