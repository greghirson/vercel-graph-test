
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-15 12:00:00", "b": 761.8}, {"a": "2025-03-15 12:05:00", "b": 731.4}, {"a": "2025-03-15 12:10:00", "b": 715.8}, {"a": "2025-03-15 12:15:00", "b": 707.0}, {"a": "2025-03-15 12:20:00", "b": 698.2}, {"a": "2025-03-15 12:25:00", "b": 680.75}, {"a": "2025-03-15 12:30:00", "b": 671.5}, {"a": "2025-03-15 12:35:00", "b": 670.0}, {"a": "2025-03-15 12:40:00", "b": 678.2}, {"a": "2025-03-15 12:45:00", "b": 673.5}, {"a": "2025-03-15 12:50:00", "b": 674.2}, {"a": "2025-03-15 12:55:00", "b": 668.0}, {"a": "2025-03-15 13:00:00", "b": 666.4}, {"a": "2025-03-15 13:05:00", "b": 666.2}, {"a": "2025-03-15 13:10:00", "b": 652.5}, {"a": "2025-03-15 13:15:00", "b": 660.6666666666666}, {"a": "2025-03-15 13:20:00", "b": 664.0}, {"a": "2025-03-15 13:25:00", "b": 662.0}, {"a": "2025-03-15 13:30:00", "b": 659.0}, {"a": "2025-03-15 13:35:00", "b": 669.8}, {"a": "2025-03-15 13:40:00", "b": 660.25}, {"a": "2025-03-15 13:45:00", "b": 649.0}, {"a": "2025-03-15 13:50:00", "b": 650.75}, {"a": "2025-03-15 13:55:00", "b": 632.6}, {"a": "2025-03-15 14:00:00", "b": 631.8}, {"a": "2025-03-15 14:05:00", "b": 634.0}, {"a": "2025-03-15 14:10:00", "b": 631.4}, {"a": "2025-03-15 14:15:00", "b": 619.2}, {"a": "2025-03-15 14:20:00", "b": 618.2}, {"a": "2025-03-15 14:25:00", "b": 629.0}, {"a": "2025-03-15 14:30:00", "b": 635.25}, {"a": "2025-03-15 14:35:00", "b": 656.4}, {"a": "2025-03-15 14:40:00", "b": 665.75}, {"a": "2025-03-15 14:45:00", "b": 643.0}, {"a": "2025-03-15 14:50:00", "b": 630.6}, {"a": "2025-03-15 14:55:00", "b": 638.0}, {"a": "2025-03-15 15:00:00", "b": 636.0}, {"a": "2025-03-15 15:05:00", "b": 624.5}, {"a": "2025-03-15 15:10:00", "b": 607.2}, {"a": "2025-03-15 15:15:00", "b": 605.25}, {"a": "2025-03-15 15:20:00", "b": 603.0}, {"a": "2025-03-15 15:25:00", "b": 590.4}, {"a": "2025-03-15 15:30:00", "b": 587.2}, {"a": "2025-03-15 15:35:00", "b": 595.4}, {"a": "2025-03-15 15:40:00", "b": 596.0}, {"a": "2025-03-15 15:45:00", "b": 586.6}, {"a": "2025-03-15 15:50:00", "b": 586.2}, {"a": "2025-03-15 15:55:00", "b": 575.5}, {"a": "2025-03-15 16:00:00", "b": 575.0}, {"a": "2025-03-15 16:05:00", "b": 587.75}, {"a": "2025-03-15 16:10:00", "b": 580.8}, {"a": "2025-03-15 16:15:00", "b": 587.0}, {"a": "2025-03-15 16:20:00", "b": 587.6}, {"a": "2025-03-15 16:25:00", "b": 572.2}, {"a": "2025-03-15 16:30:00", "b": 564.0}, {"a": "2025-03-15 16:35:00", "b": 574.4}, {"a": "2025-03-15 16:40:00", "b": 576.75}, {"a": "2025-03-15 16:45:00", "b": 570.0}, {"a": "2025-03-15 16:50:00", "b": 571.8}, {"a": "2025-03-15 16:55:00", "b": 568.6}, {"a": "2025-03-15 17:00:00", "b": 556.2}, {"a": "2025-03-15 17:05:00", "b": 549.0}, {"a": "2025-03-15 17:10:00", "b": 528.5}, {"a": "2025-03-15 17:15:00", "b": 515.6}, {"a": "2025-03-15 17:20:00", "b": 524.5}, {"a": "2025-03-15 17:25:00", "b": 524.0}, {"a": "2025-03-15 17:30:00", "b": 525.4}, {"a": "2025-03-15 17:35:00", "b": 539.6666666666666}, {"a": "2025-03-15 17:40:00", "b": 539.0}, {"a": "2025-03-15 17:45:00", "b": 538.75}, {"a": "2025-03-15 17:50:00", "b": 542.0}, {"a": "2025-03-15 17:55:00", "b": 528.25}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    