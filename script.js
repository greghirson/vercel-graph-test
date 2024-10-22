
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-21 17:50:00", "b": 554.4}, {"a": "2024-10-21 17:55:00", "b": 547.8}, {"a": "2024-10-21 18:00:00", "b": 550.0}, {"a": "2024-10-21 18:05:00", "b": 542.2}, {"a": "2024-10-21 18:10:00", "b": 539.4}, {"a": "2024-10-21 18:15:00", "b": 529.8}, {"a": "2024-10-21 18:20:00", "b": 528.0}, {"a": "2024-10-21 18:25:00", "b": 554.6}, {"a": "2024-10-21 18:30:00", "b": 590.0}, {"a": "2024-10-21 18:35:00", "b": 577.2}, {"a": "2024-10-21 18:40:00", "b": 571.3333333333334}, {"a": "2024-10-21 18:45:00", "b": 577.8}, {"a": "2024-10-21 18:50:00", "b": 594.4}, {"a": "2024-10-21 18:55:00", "b": 608.75}, {"a": "2024-10-21 19:00:00", "b": 604.6666666666666}, {"a": "2024-10-21 19:05:00", "b": 629.6}, {"a": "2024-10-21 19:10:00", "b": 642.0}, {"a": "2024-10-21 19:15:00", "b": 619.0}, {"a": "2024-10-21 19:20:00", "b": 608.0}, {"a": "2024-10-21 19:25:00", "b": 616.75}, {"a": "2024-10-21 19:30:00", "b": 624.8}, {"a": "2024-10-21 19:35:00", "b": 624.75}, {"a": "2024-10-21 19:40:00", "b": 615.6}, {"a": "2024-10-21 19:45:00", "b": 611.0}, {"a": "2024-10-21 19:50:00", "b": 618.5}, {"a": "2024-10-21 19:55:00", "b": 614.8}, {"a": "2024-10-21 20:00:00", "b": 593.75}, {"a": "2024-10-21 20:05:00", "b": 606.4}, {"a": "2024-10-21 20:10:00", "b": 623.6}, {"a": "2024-10-21 20:15:00", "b": 641.4}, {"a": "2024-10-21 20:20:00", "b": 667.5}, {"a": "2024-10-21 20:25:00", "b": 668.8}, {"a": "2024-10-21 20:30:00", "b": 655.25}, {"a": "2024-10-21 20:35:00", "b": 642.25}, {"a": "2024-10-21 20:40:00", "b": 757.2}, {"a": "2024-10-21 20:45:00", "b": 842.25}, {"a": "2024-10-21 20:50:00", "b": 844.75}, {"a": "2024-10-21 20:55:00", "b": 834.3333333333334}, {"a": "2024-10-21 21:00:00", "b": 822.25}, {"a": "2024-10-21 21:05:00", "b": 821.2}, {"a": "2024-10-21 21:10:00", "b": 818.0}, {"a": "2024-10-21 21:15:00", "b": 841.2}, {"a": "2024-10-21 21:20:00", "b": 846.0}, {"a": "2024-10-21 21:25:00", "b": 827.0}, {"a": "2024-10-21 21:30:00", "b": 828.4}, {"a": "2024-10-21 21:35:00", "b": 835.4}, {"a": "2024-10-21 21:40:00", "b": 822.2}, {"a": "2024-10-21 21:45:00", "b": 766.8}, {"a": "2024-10-21 21:50:00", "b": 729.4}, {"a": "2024-10-21 21:55:00", "b": 670.8}, {"a": "2024-10-21 22:00:00", "b": 606.4}, {"a": "2024-10-21 22:05:00", "b": 564.2}, {"a": "2024-10-21 22:10:00", "b": 566.25}, {"a": "2024-10-21 22:15:00", "b": 599.25}, {"a": "2024-10-21 22:20:00", "b": 604.5}, {"a": "2024-10-21 22:25:00", "b": 595.0}, {"a": "2024-10-21 22:30:00", "b": 607.2}, {"a": "2024-10-21 22:35:00", "b": 601.4}, {"a": "2024-10-21 22:40:00", "b": 590.4}, {"a": "2024-10-21 22:45:00", "b": 588.2}, {"a": "2024-10-21 22:50:00", "b": 594.4}, {"a": "2024-10-21 22:55:00", "b": 577.6}, {"a": "2024-10-21 23:00:00", "b": 571.8}, {"a": "2024-10-21 23:05:00", "b": 574.0}, {"a": "2024-10-21 23:10:00", "b": 577.4}, {"a": "2024-10-21 23:15:00", "b": 564.0}, {"a": "2024-10-21 23:20:00", "b": 565.4}, {"a": "2024-10-21 23:25:00", "b": 556.8}, {"a": "2024-10-21 23:30:00", "b": 549.0}, {"a": "2024-10-21 23:35:00", "b": 550.75}, {"a": "2024-10-21 23:40:00", "b": 550.4}, {"a": "2024-10-21 23:45:00", "b": 536.5}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    