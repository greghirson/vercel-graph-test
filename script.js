
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-17 19:00:00", "b": 760.4}, {"a": "2025-01-17 19:05:00", "b": 815.0}, {"a": "2025-01-17 19:10:00", "b": 839.6}, {"a": "2025-01-17 19:15:00", "b": 805.8}, {"a": "2025-01-17 19:20:00", "b": 807.6}, {"a": "2025-01-17 19:25:00", "b": 794.5}, {"a": "2025-01-17 19:30:00", "b": 770.8}, {"a": "2025-01-17 19:35:00", "b": 762.0}, {"a": "2025-01-17 19:40:00", "b": 749.4}, {"a": "2025-01-17 19:45:00", "b": 756.6}, {"a": "2025-01-17 19:50:00", "b": 743.6}, {"a": "2025-01-17 19:55:00", "b": 742.2}, {"a": "2025-01-17 20:00:00", "b": 737.3333333333334}, {"a": "2025-01-17 20:05:00", "b": 743.4}, {"a": "2025-01-17 20:10:00", "b": 746.8}, {"a": "2025-01-17 20:15:00", "b": 741.5}, {"a": "2025-01-17 20:20:00", "b": 742.4}, {"a": "2025-01-17 20:25:00", "b": 739.4}, {"a": "2025-01-17 20:30:00", "b": 750.6666666666666}, {"a": "2025-01-17 20:35:00", "b": 757.5}, {"a": "2025-01-17 20:40:00", "b": 765.4}, {"a": "2025-01-17 20:45:00", "b": 753.75}, {"a": "2025-01-17 20:50:00", "b": 746.2}, {"a": "2025-01-17 20:55:00", "b": 730.5}, {"a": "2025-01-17 21:00:00", "b": 718.5}, {"a": "2025-01-17 21:05:00", "b": 717.8}, {"a": "2025-01-17 21:10:00", "b": 717.6}, {"a": "2025-01-17 21:15:00", "b": 742.2}, {"a": "2025-01-17 21:20:00", "b": 729.4}, {"a": "2025-01-17 21:25:00", "b": 722.2}, {"a": "2025-01-17 21:30:00", "b": 741.8}, {"a": "2025-01-17 21:35:00", "b": 681.6}, {"a": "2025-01-17 21:40:00", "b": 665.8}, {"a": "2025-01-17 21:45:00", "b": 663.4}, {"a": "2025-01-17 21:50:00", "b": 659.4}, {"a": "2025-01-17 21:55:00", "b": 655.0}, {"a": "2025-01-17 22:00:00", "b": 655.3333333333334}, {"a": "2025-01-17 22:05:00", "b": 670.0}, {"a": "2025-01-17 22:10:00", "b": 655.2}, {"a": "2025-01-17 22:15:00", "b": 640.8}, {"a": "2025-01-17 22:20:00", "b": 632.25}, {"a": "2025-01-17 22:25:00", "b": 624.2}, {"a": "2025-01-17 22:30:00", "b": 623.4}, {"a": "2025-01-17 22:35:00", "b": 626.5}, {"a": "2025-01-17 22:40:00", "b": 621.4}, {"a": "2025-01-17 22:45:00", "b": 628.8}, {"a": "2025-01-17 22:50:00", "b": 629.0}, {"a": "2025-01-17 22:55:00", "b": 638.0}, {"a": "2025-01-17 23:00:00", "b": 628.8}, {"a": "2025-01-17 23:05:00", "b": 622.6}, {"a": "2025-01-17 23:10:00", "b": 625.2}, {"a": "2025-01-17 23:15:00", "b": 637.6}, {"a": "2025-01-17 23:20:00", "b": 627.6}, {"a": "2025-01-17 23:25:00", "b": 621.25}, {"a": "2025-01-17 23:30:00", "b": 632.25}, {"a": "2025-01-17 23:35:00", "b": 627.0}, {"a": "2025-01-17 23:40:00", "b": 628.75}, {"a": "2025-01-17 23:45:00", "b": 632.0}, {"a": "2025-01-17 23:50:00", "b": 626.6666666666666}, {"a": "2025-01-17 23:55:00", "b": 627.6}, {"a": "2025-01-18 00:00:00", "b": 610.5}, {"a": "2025-01-18 00:05:00", "b": 615.5}, {"a": "2025-01-18 00:10:00", "b": 600.6}, {"a": "2025-01-18 00:15:00", "b": 594.8}, {"a": "2025-01-18 00:20:00", "b": 594.6}, {"a": "2025-01-18 00:25:00", "b": 587.2}, {"a": "2025-01-18 00:30:00", "b": 599.2}, {"a": "2025-01-18 00:35:00", "b": 600.0}, {"a": "2025-01-18 00:40:00", "b": 586.2}, {"a": "2025-01-18 00:45:00", "b": 585.75}, {"a": "2025-01-18 00:50:00", "b": 576.6}, {"a": "2025-01-18 00:55:00", "b": 580.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    