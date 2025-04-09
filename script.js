
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-04-08 18:00:00", "b": 660.25}, {"a": "2025-04-08 18:05:00", "b": 947.6}, {"a": "2025-04-08 18:10:00", "b": 790.0}, {"a": "2025-04-08 18:15:00", "b": 653.4}, {"a": "2025-04-08 18:20:00", "b": 637.6}, {"a": "2025-04-08 18:25:00", "b": 664.2}, {"a": "2025-04-08 18:30:00", "b": 709.4}, {"a": "2025-04-08 18:35:00", "b": 728.8}, {"a": "2025-04-08 18:40:00", "b": 1889.8}, {"a": "2025-04-08 18:45:00", "b": 1868.4}, {"a": "2025-04-08 18:50:00", "b": 857.4}, {"a": "2025-04-08 18:55:00", "b": 688.4}, {"a": "2025-04-08 19:00:00", "b": 637.0}, {"a": "2025-04-08 19:05:00", "b": 642.6}, {"a": "2025-04-08 19:10:00", "b": 644.0}, {"a": "2025-04-08 19:15:00", "b": 622.6}, {"a": "2025-04-08 19:20:00", "b": 608.0}, {"a": "2025-04-08 19:25:00", "b": 602.0}, {"a": "2025-04-08 19:30:00", "b": 592.0}, {"a": "2025-04-08 19:35:00", "b": 590.5}, {"a": "2025-04-08 19:40:00", "b": 615.25}, {"a": "2025-04-08 19:45:00", "b": 615.8}, {"a": "2025-04-08 19:50:00", "b": 630.4}, {"a": "2025-04-08 19:55:00", "b": 633.4}, {"a": "2025-04-08 20:00:00", "b": 619.2}, {"a": "2025-04-08 20:05:00", "b": 633.2}, {"a": "2025-04-08 20:10:00", "b": 647.6}, {"a": "2025-04-08 20:15:00", "b": 659.4}, {"a": "2025-04-08 20:20:00", "b": 674.25}, {"a": "2025-04-08 20:25:00", "b": 674.6666666666666}, {"a": "2025-04-08 20:30:00", "b": 669.8}, {"a": "2025-04-08 20:35:00", "b": 672.25}, {"a": "2025-04-08 20:40:00", "b": 668.4}, {"a": "2025-04-08 20:45:00", "b": 670.0}, {"a": "2025-04-08 20:50:00", "b": 675.6}, {"a": "2025-04-08 20:55:00", "b": 664.4}, {"a": "2025-04-08 21:00:00", "b": 662.8}, {"a": "2025-04-08 21:05:00", "b": 657.0}, {"a": "2025-04-08 21:10:00", "b": 667.0}, {"a": "2025-04-08 21:15:00", "b": 659.5}, {"a": "2025-04-08 21:20:00", "b": 657.5}, {"a": "2025-04-08 21:25:00", "b": 659.4}, {"a": "2025-04-08 21:30:00", "b": 653.3333333333334}, {"a": "2025-04-08 21:35:00", "b": 658.6}, {"a": "2025-04-08 21:40:00", "b": 656.0}, {"a": "2025-04-08 21:45:00", "b": 643.2}, {"a": "2025-04-08 21:50:00", "b": 631.4}, {"a": "2025-04-08 21:55:00", "b": 632.6666666666666}, {"a": "2025-04-08 22:00:00", "b": 635.5}, {"a": "2025-04-08 22:05:00", "b": 637.25}, {"a": "2025-04-08 22:10:00", "b": 645.6}, {"a": "2025-04-08 22:15:00", "b": 640.0}, {"a": "2025-04-08 22:20:00", "b": 640.3333333333334}, {"a": "2025-04-08 22:25:00", "b": 631.5}, {"a": "2025-04-08 22:30:00", "b": 632.25}, {"a": "2025-04-08 22:35:00", "b": 637.6666666666666}, {"a": "2025-04-08 22:40:00", "b": 627.5}, {"a": "2025-04-08 22:45:00", "b": 623.0}, {"a": "2025-04-08 22:50:00", "b": 632.6666666666666}, {"a": "2025-04-08 22:55:00", "b": 626.0}, {"a": "2025-04-08 23:00:00", "b": 624.8}, {"a": "2025-04-08 23:05:00", "b": 605.8}, {"a": "2025-04-08 23:10:00", "b": 597.3333333333334}, {"a": "2025-04-08 23:15:00", "b": 597.4}, {"a": "2025-04-08 23:20:00", "b": 594.8}, {"a": "2025-04-08 23:25:00", "b": 588.6}, {"a": "2025-04-08 23:30:00", "b": 589.4}, {"a": "2025-04-08 23:35:00", "b": 588.2}, {"a": "2025-04-08 23:40:00", "b": 594.6}, {"a": "2025-04-08 23:45:00", "b": 589.4}, {"a": "2025-04-08 23:50:00", "b": 584.6}, {"a": "2025-04-08 23:55:00", "b": 600.6}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    