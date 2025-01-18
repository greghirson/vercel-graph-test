
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-17 11:00:00", "b": 612.4}, {"a": "2025-01-17 11:05:00", "b": 615.8}, {"a": "2025-01-17 11:10:00", "b": 612.5}, {"a": "2025-01-17 11:15:00", "b": 620.25}, {"a": "2025-01-17 11:20:00", "b": 612.5}, {"a": "2025-01-17 11:25:00", "b": 619.25}, {"a": "2025-01-17 11:30:00", "b": 618.2}, {"a": "2025-01-17 11:35:00", "b": 616.5}, {"a": "2025-01-17 11:40:00", "b": 627.25}, {"a": "2025-01-17 11:45:00", "b": 629.0}, {"a": "2025-01-17 11:50:00", "b": 621.25}, {"a": "2025-01-17 11:55:00", "b": 629.8}, {"a": "2025-01-17 12:00:00", "b": 635.4}, {"a": "2025-01-17 12:05:00", "b": 621.4}, {"a": "2025-01-17 12:10:00", "b": 612.6666666666666}, {"a": "2025-01-17 12:15:00", "b": 620.2}, {"a": "2025-01-17 12:20:00", "b": 621.4}, {"a": "2025-01-17 12:25:00", "b": 617.8}, {"a": "2025-01-17 12:30:00", "b": 611.8}, {"a": "2025-01-17 12:35:00", "b": 597.2}, {"a": "2025-01-17 12:40:00", "b": 593.4}, {"a": "2025-01-17 12:45:00", "b": 598.6}, {"a": "2025-01-17 12:50:00", "b": 598.6}, {"a": "2025-01-17 12:55:00", "b": 596.0}, {"a": "2025-01-17 13:00:00", "b": 590.75}, {"a": "2025-01-17 13:05:00", "b": 593.5}, {"a": "2025-01-17 13:10:00", "b": 601.0}, {"a": "2025-01-17 13:15:00", "b": 614.5}, {"a": "2025-01-17 13:20:00", "b": 605.4}, {"a": "2025-01-17 13:25:00", "b": 621.8}, {"a": "2025-01-17 13:30:00", "b": 632.4}, {"a": "2025-01-17 13:35:00", "b": 647.6}, {"a": "2025-01-17 13:40:00", "b": 655.6}, {"a": "2025-01-17 13:45:00", "b": 655.5}, {"a": "2025-01-17 13:50:00", "b": 659.0}, {"a": "2025-01-17 13:55:00", "b": 681.5}, {"a": "2025-01-17 14:00:00", "b": 709.6}, {"a": "2025-01-17 14:05:00", "b": 730.6}, {"a": "2025-01-17 14:10:00", "b": 773.2}, {"a": "2025-01-17 14:15:00", "b": 789.6}, {"a": "2025-01-17 14:20:00", "b": 815.0}, {"a": "2025-01-17 14:25:00", "b": 811.0}, {"a": "2025-01-17 14:30:00", "b": 826.0}, {"a": "2025-01-17 14:35:00", "b": 839.2}, {"a": "2025-01-17 14:40:00", "b": 830.5}, {"a": "2025-01-17 14:45:00", "b": 857.0}, {"a": "2025-01-17 14:50:00", "b": 770.0}, {"a": "2025-01-17 14:55:00", "b": 659.25}, {"a": "2025-01-17 15:00:00", "b": 663.8}, {"a": "2025-01-17 15:05:00", "b": 695.2}, {"a": "2025-01-17 15:10:00", "b": 677.0}, {"a": "2025-01-17 15:15:00", "b": 658.75}, {"a": "2025-01-17 15:20:00", "b": 642.6}, {"a": "2025-01-17 15:25:00", "b": 629.75}, {"a": "2025-01-17 15:30:00", "b": 628.4}, {"a": "2025-01-17 15:35:00", "b": 627.5}, {"a": "2025-01-17 15:40:00", "b": 622.0}, {"a": "2025-01-17 15:45:00", "b": 624.8}, {"a": "2025-01-17 15:50:00", "b": 636.4}, {"a": "2025-01-17 15:55:00", "b": 622.2}, {"a": "2025-01-17 16:00:00", "b": 617.0}, {"a": "2025-01-17 16:05:00", "b": 675.8}, {"a": "2025-01-17 16:10:00", "b": 700.6666666666666}, {"a": "2025-01-17 16:15:00", "b": 721.75}, {"a": "2025-01-17 16:20:00", "b": 743.0}, {"a": "2025-01-17 16:25:00", "b": 755.4}, {"a": "2025-01-17 16:30:00", "b": 637.8}, {"a": "2025-01-17 16:35:00", "b": 633.2}, {"a": "2025-01-17 16:40:00", "b": 664.25}, {"a": "2025-01-17 16:45:00", "b": 664.0}, {"a": "2025-01-17 16:50:00", "b": 660.25}, {"a": "2025-01-17 16:55:00", "b": 667.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    