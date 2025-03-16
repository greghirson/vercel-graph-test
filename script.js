
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-15 14:00:00", "b": 631.8}, {"a": "2025-03-15 14:05:00", "b": 634.0}, {"a": "2025-03-15 14:10:00", "b": 631.4}, {"a": "2025-03-15 14:15:00", "b": 619.2}, {"a": "2025-03-15 14:20:00", "b": 618.2}, {"a": "2025-03-15 14:25:00", "b": 629.0}, {"a": "2025-03-15 14:30:00", "b": 635.25}, {"a": "2025-03-15 14:35:00", "b": 656.4}, {"a": "2025-03-15 14:40:00", "b": 665.75}, {"a": "2025-03-15 14:45:00", "b": 643.0}, {"a": "2025-03-15 14:50:00", "b": 630.6}, {"a": "2025-03-15 14:55:00", "b": 638.0}, {"a": "2025-03-15 15:00:00", "b": 636.0}, {"a": "2025-03-15 15:05:00", "b": 624.5}, {"a": "2025-03-15 15:10:00", "b": 607.2}, {"a": "2025-03-15 15:15:00", "b": 605.25}, {"a": "2025-03-15 15:20:00", "b": 603.0}, {"a": "2025-03-15 15:25:00", "b": 590.4}, {"a": "2025-03-15 15:30:00", "b": 587.2}, {"a": "2025-03-15 15:35:00", "b": 595.4}, {"a": "2025-03-15 15:40:00", "b": 596.0}, {"a": "2025-03-15 15:45:00", "b": 586.6}, {"a": "2025-03-15 15:50:00", "b": 586.2}, {"a": "2025-03-15 15:55:00", "b": 575.5}, {"a": "2025-03-15 16:00:00", "b": 575.0}, {"a": "2025-03-15 16:05:00", "b": 587.75}, {"a": "2025-03-15 16:10:00", "b": 580.8}, {"a": "2025-03-15 16:15:00", "b": 587.0}, {"a": "2025-03-15 16:20:00", "b": 587.6}, {"a": "2025-03-15 16:25:00", "b": 572.2}, {"a": "2025-03-15 16:30:00", "b": 564.0}, {"a": "2025-03-15 16:35:00", "b": 574.4}, {"a": "2025-03-15 16:40:00", "b": 576.75}, {"a": "2025-03-15 16:45:00", "b": 570.0}, {"a": "2025-03-15 16:50:00", "b": 571.8}, {"a": "2025-03-15 16:55:00", "b": 568.6}, {"a": "2025-03-15 17:00:00", "b": 556.2}, {"a": "2025-03-15 17:05:00", "b": 549.0}, {"a": "2025-03-15 17:10:00", "b": 528.5}, {"a": "2025-03-15 17:15:00", "b": 515.6}, {"a": "2025-03-15 17:20:00", "b": 524.5}, {"a": "2025-03-15 17:25:00", "b": 524.0}, {"a": "2025-03-15 17:30:00", "b": 525.4}, {"a": "2025-03-15 17:35:00", "b": 539.6666666666666}, {"a": "2025-03-15 17:40:00", "b": 539.0}, {"a": "2025-03-15 17:45:00", "b": 538.75}, {"a": "2025-03-15 17:50:00", "b": 542.0}, {"a": "2025-03-15 17:55:00", "b": 528.25}, {"a": "2025-03-15 18:00:00", "b": 544.0}, {"a": "2025-03-15 18:05:00", "b": 574.6}, {"a": "2025-03-15 18:10:00", "b": 571.8}, {"a": "2025-03-15 18:15:00", "b": 576.6}, {"a": "2025-03-15 18:20:00", "b": 588.25}, {"a": "2025-03-15 18:25:00", "b": 611.25}, {"a": "2025-03-15 18:30:00", "b": 599.8}, {"a": "2025-03-15 18:35:00", "b": 608.4}, {"a": "2025-03-15 18:40:00", "b": 616.25}, {"a": "2025-03-15 18:45:00", "b": 592.8}, {"a": "2025-03-15 18:50:00", "b": 592.8}, {"a": "2025-03-15 18:55:00", "b": 604.0}, {"a": "2025-03-15 19:00:00", "b": 618.2}, {"a": "2025-03-15 19:05:00", "b": 623.4}, {"a": "2025-03-15 19:10:00", "b": 610.4}, {"a": "2025-03-15 19:15:00", "b": 603.8}, {"a": "2025-03-15 19:20:00", "b": 605.6}, {"a": "2025-03-15 19:25:00", "b": 596.6666666666666}, {"a": "2025-03-15 19:30:00", "b": 595.4}, {"a": "2025-03-15 19:35:00", "b": 610.8}, {"a": "2025-03-15 19:40:00", "b": 620.8}, {"a": "2025-03-15 19:45:00", "b": 600.8}, {"a": "2025-03-15 19:50:00", "b": 584.4}, {"a": "2025-03-15 19:55:00", "b": 577.8}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    