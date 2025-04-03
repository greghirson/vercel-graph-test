
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-04-02 12:00:00", "b": 507.0}, {"a": "2025-04-02 12:05:00", "b": 515.0}, {"a": "2025-04-02 12:10:00", "b": 523.25}, {"a": "2025-04-02 12:15:00", "b": 523.5}, {"a": "2025-04-02 12:20:00", "b": 517.0}, {"a": "2025-04-02 12:25:00", "b": 521.5}, {"a": "2025-04-02 12:30:00", "b": 527.0}, {"a": "2025-04-02 12:35:00", "b": 512.25}, {"a": "2025-04-02 12:40:00", "b": 520.8}, {"a": "2025-04-02 12:45:00", "b": 534.5}, {"a": "2025-04-02 12:50:00", "b": 530.6}, {"a": "2025-04-02 12:55:00", "b": 531.25}, {"a": "2025-04-02 13:00:00", "b": 583.2}, {"a": "2025-04-02 13:05:00", "b": 617.0}, {"a": "2025-04-02 13:10:00", "b": 598.0}, {"a": "2025-04-02 13:15:00", "b": 624.8}, {"a": "2025-04-02 13:20:00", "b": 647.6666666666666}, {"a": "2025-04-02 13:25:00", "b": 660.0}, {"a": "2025-04-02 13:30:00", "b": 684.5}, {"a": "2025-04-02 13:35:00", "b": 668.0}, {"a": "2025-04-02 13:40:00", "b": 644.8}, {"a": "2025-04-02 13:45:00", "b": 640.0}, {"a": "2025-04-02 13:50:00", "b": 624.2}, {"a": "2025-04-02 13:55:00", "b": 643.25}, {"a": "2025-04-02 14:00:00", "b": 633.4}, {"a": "2025-04-02 14:05:00", "b": 646.4}, {"a": "2025-04-02 14:10:00", "b": 660.2}, {"a": "2025-04-02 14:15:00", "b": 619.4}, {"a": "2025-04-02 14:20:00", "b": 595.8}, {"a": "2025-04-02 14:25:00", "b": 565.0}, {"a": "2025-04-02 14:30:00", "b": 545.6}, {"a": "2025-04-02 14:35:00", "b": 551.6}, {"a": "2025-04-02 14:40:00", "b": 559.2}, {"a": "2025-04-02 14:45:00", "b": 557.0}, {"a": "2025-04-02 14:50:00", "b": 537.4}, {"a": "2025-04-02 14:55:00", "b": 546.8}, {"a": "2025-04-02 15:00:00", "b": 556.0}, {"a": "2025-04-02 15:05:00", "b": 556.6666666666666}, {"a": "2025-04-02 15:10:00", "b": 565.5}, {"a": "2025-04-02 15:15:00", "b": 577.25}, {"a": "2025-04-02 15:20:00", "b": 623.2}, {"a": "2025-04-02 15:25:00", "b": 673.8}, {"a": "2025-04-02 15:30:00", "b": 678.6}, {"a": "2025-04-02 15:35:00", "b": 673.8}, {"a": "2025-04-02 15:40:00", "b": 639.0}, {"a": "2025-04-02 15:45:00", "b": 636.0}, {"a": "2025-04-02 15:50:00", "b": 647.0}, {"a": "2025-04-02 15:55:00", "b": 650.0}, {"a": "2025-04-02 16:00:00", "b": 639.8}, {"a": "2025-04-02 16:05:00", "b": 630.2}, {"a": "2025-04-02 16:10:00", "b": 629.0}, {"a": "2025-04-02 16:15:00", "b": 617.25}, {"a": "2025-04-02 16:20:00", "b": 634.8}, {"a": "2025-04-02 16:25:00", "b": 635.25}, {"a": "2025-04-02 16:30:00", "b": 590.2}, {"a": "2025-04-02 16:35:00", "b": 571.2}, {"a": "2025-04-02 16:40:00", "b": 571.4}, {"a": "2025-04-02 16:45:00", "b": 573.0}, {"a": "2025-04-02 16:50:00", "b": 567.0}, {"a": "2025-04-02 16:55:00", "b": 568.2}, {"a": "2025-04-02 17:00:00", "b": 602.0}, {"a": "2025-04-02 17:05:00", "b": 633.2}, {"a": "2025-04-02 17:10:00", "b": 607.4}, {"a": "2025-04-02 17:15:00", "b": 610.0}, {"a": "2025-04-02 17:20:00", "b": 718.2}, {"a": "2025-04-02 17:25:00", "b": 695.0}, {"a": "2025-04-02 17:30:00", "b": 618.0}, {"a": "2025-04-02 17:35:00", "b": 612.2}, {"a": "2025-04-02 17:40:00", "b": 606.0}, {"a": "2025-04-02 17:45:00", "b": 587.0}, {"a": "2025-04-02 17:50:00", "b": 584.75}, {"a": "2025-04-02 17:55:00", "b": 600.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    