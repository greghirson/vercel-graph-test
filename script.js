
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-02-02 09:00:00", "b": 718.0}, {"a": "2025-02-02 09:05:00", "b": 726.0}, {"a": "2025-02-02 09:10:00", "b": 723.75}, {"a": "2025-02-02 09:15:00", "b": 700.6}, {"a": "2025-02-02 09:20:00", "b": 665.2}, {"a": "2025-02-02 09:25:00", "b": 670.6}, {"a": "2025-02-02 09:30:00", "b": 681.5}, {"a": "2025-02-02 09:35:00", "b": 680.4}, {"a": "2025-02-02 09:40:00", "b": 673.6}, {"a": "2025-02-02 09:45:00", "b": 688.8}, {"a": "2025-02-02 09:50:00", "b": 697.6}, {"a": "2025-02-02 09:55:00", "b": 692.75}, {"a": "2025-02-02 10:00:00", "b": 698.6666666666666}, {"a": "2025-02-02 10:05:00", "b": 680.75}, {"a": "2025-02-02 10:10:00", "b": 661.0}, {"a": "2025-02-02 10:15:00", "b": 650.2}, {"a": "2025-02-02 10:20:00", "b": 652.75}, {"a": "2025-02-02 10:25:00", "b": 657.0}, {"a": "2025-02-02 10:30:00", "b": 667.0}, {"a": "2025-02-02 10:35:00", "b": 650.75}, {"a": "2025-02-02 10:40:00", "b": 641.8}, {"a": "2025-02-02 10:45:00", "b": 667.2}, {"a": "2025-02-02 10:50:00", "b": 666.2}, {"a": "2025-02-02 10:55:00", "b": 642.3333333333334}, {"a": "2025-02-02 11:00:00", "b": 631.6}, {"a": "2025-02-02 11:05:00", "b": 641.8}, {"a": "2025-02-02 11:10:00", "b": 647.0}, {"a": "2025-02-02 11:15:00", "b": 648.2}, {"a": "2025-02-02 11:20:00", "b": 627.6}, {"a": "2025-02-02 11:25:00", "b": 614.75}, {"a": "2025-02-02 11:30:00", "b": 619.8}, {"a": "2025-02-02 11:35:00", "b": 610.2}, {"a": "2025-02-02 11:40:00", "b": 586.4}, {"a": "2025-02-02 11:45:00", "b": 587.75}, {"a": "2025-02-02 11:50:00", "b": 588.0}, {"a": "2025-02-02 11:55:00", "b": 586.5}, {"a": "2025-02-02 12:00:00", "b": 585.4}, {"a": "2025-02-02 12:05:00", "b": 577.5}, {"a": "2025-02-02 12:10:00", "b": 576.6}, {"a": "2025-02-02 12:15:00", "b": 571.0}, {"a": "2025-02-02 12:20:00", "b": 606.2}, {"a": "2025-02-02 12:25:00", "b": 615.25}, {"a": "2025-02-02 12:30:00", "b": 597.8}, {"a": "2025-02-02 12:35:00", "b": 583.25}, {"a": "2025-02-02 12:40:00", "b": 591.2}, {"a": "2025-02-02 12:45:00", "b": 599.0}, {"a": "2025-02-02 12:50:00", "b": 608.2}, {"a": "2025-02-02 12:55:00", "b": 611.6666666666666}, {"a": "2025-02-02 13:00:00", "b": 605.2}, {"a": "2025-02-02 13:05:00", "b": 595.6}, {"a": "2025-02-02 13:10:00", "b": 600.25}, {"a": "2025-02-02 13:15:00", "b": 605.3333333333334}, {"a": "2025-02-02 13:20:00", "b": 592.6666666666666}, {"a": "2025-02-02 13:25:00", "b": 599.3333333333334}, {"a": "2025-02-02 13:30:00", "b": 600.75}, {"a": "2025-02-02 13:35:00", "b": 598.2}, {"a": "2025-02-02 13:40:00", "b": 599.5}, {"a": "2025-02-02 13:45:00", "b": 589.0}, {"a": "2025-02-02 13:50:00", "b": 591.25}, {"a": "2025-02-02 13:55:00", "b": 589.0}, {"a": "2025-02-02 14:00:00", "b": 583.3333333333334}, {"a": "2025-02-02 14:05:00", "b": 570.0}, {"a": "2025-02-02 14:10:00", "b": 581.8}, {"a": "2025-02-02 14:15:00", "b": 583.2}, {"a": "2025-02-02 14:20:00", "b": 586.75}, {"a": "2025-02-02 14:25:00", "b": 587.0}, {"a": "2025-02-02 14:30:00", "b": 588.25}, {"a": "2025-02-02 14:35:00", "b": 599.0}, {"a": "2025-02-02 14:40:00", "b": 596.4}, {"a": "2025-02-02 14:45:00", "b": 598.0}, {"a": "2025-02-02 14:50:00", "b": 582.8}, {"a": "2025-02-02 14:55:00", "b": 582.5}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    